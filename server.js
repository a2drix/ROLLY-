import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Serverless function handlers
import usersHandler from './api/users.js';
import ordersHandler from './api/orders.js';
import productsHandler from './api/products.js';
import ticketsHandler from './api/tickets.js';
import dealHandler from './api/deal.js';
import discordClientIdHandler from './api/discord-client-id.js';
import discordAuthHandler from './api/discord-auth.js';
import adminDiscordIdsHandler from './api/admin-discord-ids.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Helper to bridge Express req/res to Vercel handler
const vercelBridge = (handler) => {
  return async (req, res) => {
    // Inject Vercel request helper attributes
    req.query = req.query || {};
    
    // Inject Vercel response helper methods
    if (!res.status) {
      res.status = (code) => {
        res.statusCode = code;
        return res;
      };
    }
    if (!res.json) {
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
        return res;
      };
    }
    
    try {
      await handler(req, res);
    } catch (err) {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message });
      }
    }
  };
};

// Bind API routes
app.all('/api/users', vercelBridge(usersHandler));
app.all('/api/orders', vercelBridge(ordersHandler));
app.all('/api/products', vercelBridge(productsHandler));
app.all('/api/tickets', vercelBridge(ticketsHandler));
app.all('/api/deal', vercelBridge(dealHandler));
app.all('/api/discord-client-id', vercelBridge(discordClientIdHandler));
app.all('/api/discord-auth', vercelBridge(discordAuthHandler));
app.all('/api/admin-discord-ids', vercelBridge(adminDiscordIdsHandler));

// Serve static files from Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
