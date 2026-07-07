import { setCorsHeaders } from './db.js';

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, redirectUri } = req.body;

  if (!code || !redirectUri) {
    return res.status(400).json({ error: 'Missing code or redirectUri' });
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Discord Client ID or Secret is not configured on the server.' });
  }

  try {
    // 1. Exchange authorization code for access token
    const tokenResponse = await fetch('https://discord.com/api/v10/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }).toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Discord Token Exchange Error:', tokenData);
      return res.status(tokenResponse.status).json({ error: tokenData.error_description || 'Failed to exchange token' });
    }

    const { access_token } = tokenData;

    // 2. Fetch user profile using the access token
    const userResponse = await fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('Discord Get User Profile Error:', userData);
      return res.status(userResponse.status).json({ error: 'Failed to fetch user profile' });
    }

    // 3. Automatically add user to the Discord Server (Guild) if Bot Token and Guild ID are set
    const botToken = process.env.DISCORD_BOT_TOKEN;
    const guildId = process.env.DISCORD_GUILD_ID;

    if (botToken && guildId) {
      try {
        const joinResponse = await fetch(`https://discord.com/api/v10/guilds/${guildId}/members/${userData.id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bot ${botToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: access_token,
          }),
        });

        if (joinResponse.ok) {
          console.log(`Successfully added user ${userData.username} to guild ${guildId}`);
        } else {
          const joinError = await joinResponse.json();
          console.error(`Failed to add user to guild:`, joinError);
        }
      } catch (err) {
        console.error('Error adding user to guild:', err);
      }
    }

    // 4. Return user profile details
    return res.status(200).json({
      id: userData.id,
      username: userData.username,
      discriminator: userData.discriminator,
      global_name: userData.global_name,
      avatar: userData.avatar,
      email: userData.email,
    });
  } catch (error) {
    console.error('Discord Auth Handler Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
