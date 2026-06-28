import { dbGet, dbSet, setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const tickets = await dbGet('rolly_tickets');
      return res.status(200).json(tickets || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedTickets = req.body;
      if (!Array.isArray(updatedTickets)) {
        return res.status(400).json({ error: 'Body must be an array of tickets' });
      }

      await dbSet('rolly_tickets', updatedTickets);
      return res.status(200).json({ success: true, count: updatedTickets.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
