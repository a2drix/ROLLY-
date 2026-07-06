import { dbGet, dbSet, setCorsHeaders, isDbConnected } from './db.js';

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

      // Discord Webhook Notification System
      const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          const existingData = await dbGet('rolly_tickets') || [];
          const existingIds = new Set(existingData.map(t => t.id));

          for (const ticket of updatedData) {
            // Case 1: Brand new ticket
            if (!existingIds.has(ticket.id)) {
              const embed = {
                username: "ROLLY Support Bot",
                avatar_url: "https://rolly-beta.vercel.app/ooredoo-logo.png",
                embeds: [{
                  title: "🎫 Nouveau Ticket Support !",
                  color: 16738048, // Glowing orange
                  fields: [
                    { name: "ID du Ticket", value: ticket.id, inline: true },
                    { name: "Client", value: `${ticket.customerName} (${ticket.customerEmail})`, inline: true },
                    { name: "Sujet / Message", value: ticket.message }
                  ],
                  footer: { text: "Boutique ROLLY" },
                  timestamp: new Date().toISOString()
                }]
              };

              await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(embed)
              });
            } else {
              // Case 2: New reply in existing ticket
              const oldTicket = existingData.find(t => t.id === ticket.id);
              if (oldTicket) {
                const oldRepliesCount = oldTicket.replies ? oldTicket.replies.length : 0;
                const newRepliesCount = ticket.replies ? ticket.replies.length : 0;

                if (newRepliesCount > oldRepliesCount) {
                  const latestReply = ticket.replies[newRepliesCount - 1];
                  // Only notify if reply is from client
                  if (latestReply.sender === 'client') {
                    const embed = {
                      username: "ROLLY Support Bot",
                      avatar_url: "https://rolly-beta.vercel.app/ooredoo-logo.png",
                      embeds: [{
                        title: `💬 Nouveau Message - Ticket ${ticket.id}`,
                        color: 3447003, // Clean blue
                        fields: [
                          { name: "Client", value: ticket.customerName, inline: true },
                          { name: "Message", value: latestReply.text }
                        ],
                        footer: { text: "Boutique ROLLY" },
                        timestamp: new Date().toISOString()
                      }]
                    };

                    await fetch(webhookUrl, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(embed)
                    });
                  }
                }
              }
            }
          }
        } catch (webhookErr) {
          console.error("Discord Webhook Send Error:", webhookErr);
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
