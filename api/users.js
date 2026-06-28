import { dbGet, dbSet, setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const users = await dbGet('rolly_users');
      return res.status(200).json(users || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedUsers = req.body;
      if (!Array.isArray(updatedUsers)) {
        return res.status(400).json({ error: 'Body must be an array of users' });
      }

      await dbSet('rolly_users', updatedUsers);
      return res.status(200).json({ success: true, count: updatedUsers.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
