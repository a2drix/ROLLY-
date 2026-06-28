// Server-side cloud database helper connecting to Vercel KV (Redis) REST API
const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

// Local in-memory cache database for offline/local simulation fallback
let memoryDB = {
  rolly_products: null,
  rolly_orders: null,
  rolly_users: null,
  rolly_tickets: null
};

// Generic CORS response helper headers
export function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
}

// Write a key to the cloud KV database or local memory cache
export async function dbSet(key, value) {
  if (KV_URL && KV_TOKEN) {
    try {
      const res = await fetch(`${KV_URL}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(['SET', key, JSON.stringify(value)])
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.error("Vercel KV Set Error, falling back to memory:", e);
    }
  }
  
  memoryDB[key] = value;
  return { result: "OK", source: "memory" };
}

// Read a key from the cloud KV database or local memory cache
export async function dbGet(key) {
  if (KV_URL && KV_TOKEN) {
    try {
      const res = await fetch(`${KV_URL}/get/${key}`, {
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`
        }
      });
      const data = await res.json();
      if (data && data.result) {
        return JSON.parse(data.result);
      }
    } catch (e) {
      console.error("Vercel KV Get Error, falling back to memory:", e);
    }
  }

  return memoryDB[key] || null;
}
