import { dbGet, dbSet, setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const orders = await dbGet('rolly_orders');
      return res.status(200).json(orders || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedOrders = req.body;
      if (!Array.isArray(updatedOrders)) {
        return res.status(400).json({ error: 'Body must be an array of orders' });
      }

      await dbSet('rolly_orders', updatedOrders);
      return res.status(200).json({ success: true, count: updatedOrders.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
