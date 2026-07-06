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
      const data = await dbGet('rolly_users');
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedData = req.body;
      if (!Array.isArray(updatedData)) {
        return res.status(400).json({ error: 'Body must be an array' });
      }

      await dbSet('rolly_users', updatedData);
      return res.status(200).json({ success: true, count: updatedData.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
