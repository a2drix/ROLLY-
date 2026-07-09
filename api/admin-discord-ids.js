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
      const data = await dbGet('rolly_admin_discord_ids');
      // Default fallback list
      const defaultIds = ["1095338999599616081", "1242545920998904044"];
      return res.status(200).json(data || defaultIds);
    }

    if (req.method === 'POST') {
      const newIds = req.body;
      if (!Array.isArray(newIds)) {
        return res.status(400).json({ error: 'Body must be an array of IDs' });
      }
      await dbSet('rolly_admin_discord_ids', newIds);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
