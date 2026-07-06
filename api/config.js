import { setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const authHeader = req.headers.authorization;
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!authHeader || authHeader !== `Bot ${botToken}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  return res.status(200).json({
    channelId: process.env.DISCORD_CHANNEL_ID
  });
}
