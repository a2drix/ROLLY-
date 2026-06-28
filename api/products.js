import { dbGet, dbSet, setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const products = await dbGet('rolly_products');
      return res.status(200).json(products || []);
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const updatedProducts = req.body;
      if (!Array.isArray(updatedProducts)) {
        return res.status(400).json({ error: 'Body must be an array of products' });
      }

      await dbSet('rolly_products', updatedProducts);
      return res.status(200).json({ success: true, count: updatedProducts.length });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
