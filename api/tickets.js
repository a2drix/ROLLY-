import { dbGet, dbSet, setCorsHeaders, isDbConnected } from './db.js';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// Helper to create a Discord thread under the configured channel
async function createDiscordThread(ticket) {
  if (!DISCORD_BOT_TOKEN || !DISCORD_CHANNEL_ID) return null;
  try {
    const threadName = `${ticket.id} - ${ticket.customerName}`;
    const res = await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/threads`, {
      method: 'POST',
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: threadName.substring(0, 100),
        auto_archive_duration: 1440,
        type: 11 // Guild Public Thread
      })
    });
    
    if (res.ok) {
      const thread = await res.json();
      return thread.id;
    } else {
      const errTxt = await res.text();
      console.error("Discord Thread Creation Failed:", errTxt);
    }
  } catch (e) {
    console.error("Discord Thread Creation Error:", e);
  }
  return null;
}

// Helper to send a message to a Discord thread
async function sendDiscordThreadMessage(threadId, content) {
  if (!DISCORD_BOT_TOKEN || !threadId) return;
  try {
    await fetch(`https://discord.com/api/v10/channels/${threadId}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
  } catch (e) {
    console.error("Discord Thread Message Error:", e);
  }
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!isDbConnected) {
    return res.status(503).json({ error: 'database_disconnected' });
  }

  try {
    if (req.method === 'GET') {
      const data = await dbGet('rolly_tickets');
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedData = req.body;
      if (!Array.isArray(updatedData)) {
        return res.status(400).json({ error: 'Body must be an array' });
      }

      const existingData = await dbGet('rolly_tickets') || [];
      const existingIds = new Set(existingData.map(t => t.id));

      for (const ticket of updatedData) {
        // Case 1: Brand new ticket
        if (!existingIds.has(ticket.id)) {
          // 1. Create Discord thread if token & channel exist
          const threadId = await createDiscordThread(ticket);
          if (threadId) {
            ticket.threadId = threadId; // Save thread ID in the ticket object
            
            // Send initial information card inside the thread
            const introMsg = `🎫 **Nouveau Ticket Support :**\n• **ID :** ${ticket.id}\n• **Client :** ${ticket.customerName} (${ticket.customerEmail})\n• **Message original :**\n>>> ${ticket.message}`;
            await sendDiscordThreadMessage(threadId, introMsg);
          }
        } else {
          // Case 2: New reply in existing ticket
          const oldTicket = existingData.find(t => t.id === ticket.id);
          if (oldTicket) {
            // Keep threadId if it exists in DB but not sent by frontend
            if (oldTicket.threadId && !ticket.threadId) {
              ticket.threadId = oldTicket.threadId;
            }

            const oldRepliesCount = oldTicket.replies ? oldTicket.replies.length : 0;
            const newRepliesCount = ticket.replies ? ticket.replies.length : 0;

            if (newRepliesCount > oldRepliesCount) {
              const latestReply = ticket.replies[newRepliesCount - 1];
              // Sync this reply to Discord thread if threadId exists
              if (ticket.threadId) {
                const prefix = latestReply.sender === "admin" ? "⚙️ **Support ROLLY :** " : "👤 **Client :** ";
                await sendDiscordThreadMessage(ticket.threadId, `${prefix}${latestReply.text}`);
              }
            }
          }
        }
      }

      await dbSet('rolly_tickets', updatedData);
      return res.status(200).json({ success: true, count: updatedData.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
