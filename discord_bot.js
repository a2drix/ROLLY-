import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN;
const channelId = process.env.DISCORD_CHANNEL_ID;
const websiteUrl = process.env.WEBSITE_URL || 'https://rolly-beta.vercel.app';

if (!token || !channelId) {
  console.error("Error: DISCORD_BOT_TOKEN and DISCORD_CHANNEL_ID must be defined in your environment variables (.env file)!");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Bot ROLLY connecté avec succès en tant que ${client.user.tag}!`);
  console.log(`🎫 Canal cible : ${channelId}`);
  console.log(`🌐 Site Web cible : ${websiteUrl}`);
});

client.on('messageCreate', async (message) => {
  // Ignore messages from bots to prevent feedback loops
  if (message.author.bot) return;

  // Check if message is inside a thread
  if (!message.channel.isThread()) return;

  // Verify the thread belongs to our target channel
  if (message.channel.parentId !== channelId) return;

  const threadId = message.channel.id;
  const replyText = message.content.trim();
  if (!replyText) return;

  console.log(`💬 Message reçu dans le thread ID ${threadId} de ${message.author.username} : ${replyText}`);

  try {
    // 1. Fetch current ticket list from Website API
    const getRes = await fetch(`${websiteUrl}/api/tickets`);
    if (!getRes.ok) {
      throw new Error(`Failed to fetch tickets: ${getRes.status} ${getRes.statusText}`);
    }
    const tickets = await getRes.json();

    // 2. Find matching ticket by threadId
    const ticket = tickets.find(t => t.threadId === threadId);
    if (!ticket) {
      console.warn(`⚠️ Aucun ticket correspondant trouvé pour le thread ID ${threadId}.`);
      return;
    }

    // 3. Append reply as admin
    const timeStr = new Date().toLocaleString();
    if (!ticket.replies) ticket.replies = [];
    ticket.replies.push({
      sender: 'admin',
      text: replyText,
      time: timeStr
    });

    // 4. Save updated tickets list back to Website API
    const postRes = await fetch(`${websiteUrl}/api/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tickets)
    });

    if (postRes.ok) {
      console.log(`✅ Réponse de l'administrateur synchronisée avec le site pour le ticket ${ticket.id}!`);
    } else {
      const errTxt = await postRes.text();
      console.error(`❌ Échec de la synchronisation de la réponse :`, errTxt);
    }
  } catch (error) {
    console.error("❌ Erreur de synchronisation du message :", error);
  }
});

client.on('error', (err) => {
  console.error("Discord Client Error:", err);
});

client.login(token);
