import { dbGet, dbSet, setCorsHeaders, isDbConnected } from './db.js';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

async function sendDiscordNotification(order) {
  if (!DISCORD_BOT_TOKEN || !DISCORD_CHANNEL_ID) return;
  try {
    let methodDesc = "Solde Ooredoo";
    if (order.method === "d17") methodDesc = "D17 Poste";
    if (order.method === "binance") methodDesc = "Binance Pay";

    const content = `🛒 **Nouvelle Commande Reçue :**\n` +
                    `• **ID Commande :** \`${order.id}\`\n` +
                    `• **Articles :** \`${order.items}\`\n` +
                    `• **Total :** \`${order.total} DT\`\n` +
                    `• **Méthode :** \`${methodDesc}\`\n` +
                    `• **Détails Client :** \`${order.customer}\`\n` +
                    `• **Statut :** \`${order.status}\``;

    await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
  } catch (e) {
    console.error("Discord Order Notification Error:", e);
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
      const data = await dbGet('rolly_orders');
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedData = req.body;
      if (!Array.isArray(updatedData)) {
        return res.status(400).json({ error: 'Body must be an array' });
      }

      // Check for new orders to notify Discord
      const existingData = await dbGet('rolly_orders') || [];
      const existingIds = new Set(existingData.map(o => o.id));

      for (const order of updatedData) {
        if (!existingIds.has(order.id)) {
          // New order detected, send notification
          await sendDiscordNotification(order);
        }
      }

      await dbSet('rolly_orders', updatedData);
      return res.status(200).json({ success: true, count: updatedData.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
