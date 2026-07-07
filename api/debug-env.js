import { setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = process.env.DISCORD_CLIENT_ID || '';
  const botToken = process.env.DISCORD_BOT_TOKEN || '';
  const guildId = process.env.DISCORD_GUILD_ID || '';
  const roleId = process.env.DISCORD_ROLE_ID || '';

  // Safe masking helper
  const mask = (str) => {
    if (!str) return 'not_configured';
    if (str.length <= 8) return '*'.repeat(str.length);
    return str.slice(0, 4) + '...' + str.slice(-4) + ` (${str.length} chars)`;
  };

  return res.status(200).json({
    DISCORD_CLIENT_ID: clientId || 'not_configured',
    DISCORD_CLIENT_SECRET_STATUS: process.env.DISCORD_CLIENT_SECRET ? 'configured' : 'not_configured',
    DISCORD_BOT_TOKEN: mask(botToken),
    DISCORD_GUILD_ID: guildId || 'not_configured',
    DISCORD_ROLE_ID: roleId || 'not_configured'
  });
}
