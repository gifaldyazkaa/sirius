const { Client, Collection } = require('discord.js');
const { Player } = require('discord-player');
require('dotenv').config();

const client = new Client({
	intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.player = new Player(client);

// Initialize the project
require('./src/Handler')(client);

client.login(process.env.TOKEN);
