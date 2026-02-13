const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const OWNER_ID = '1382872228957519935'; // your Discord user ID

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // Only you can use commands
    if (interaction.user.id !== OWNER_ID) {
        return interaction.reply({ content: "You can't use this command.", ephemeral: true });
    }

    if (interaction.commandName === 'clear-channel') {
        const channel = interaction.channel;
        const messages = await channel.messages.fetch({ limit: 100 });
        await channel.bulkDelete(messages, true);
        interaction.reply({ content: 'Channel cleared!', ephemeral: true });
    }
});

client.login('MTQ3MDY0MjgzMTAyOTk2NDg3Mw.GBqSQ7.ud7epWjFS_7Ec79SZWSajN6X5bUykMfX9mXbuQ');
