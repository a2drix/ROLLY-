import { dbGet, dbSet, setCorsHeaders, isDbConnected } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!isDbConnected) {
    return res.status(200).json({ error: 'database_disconnected' });
  }

  try {
    if (req.method === 'GET') {
      const data = await dbGet('rolly_deal_of_the_day');
      return res.status(200).json(data || null);
    }

    if (req.method === 'POST') {
      const dealConfig = req.body;
      await dbSet('rolly_deal_of_the_day', dealConfig);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
