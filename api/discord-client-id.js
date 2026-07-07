import { setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = process.env.DISCORD_CLIENT_ID || '';
  return res.status(200).json({
    clientId: clientId
  });
}
