const Discord = require ('discord.js');

const { prefix, token } = require('./config.json')

const client = new Discord.Client();

client.once('ready', ()=> {
    console.log('Mise a jour effecuter !');
});

client.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === `ping`) {
        message.channel.send('Pong');
    }
    else if (command === `serveur`) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre de membres : ${message.guild.memberCount}`);
    }
    else if (command === `pp`) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre pp est ${message.author.displayAvatarURL({ format: 'png' })}`)
        }

        const avatarList = message.mentions.users.map(user => {
            return `L'avatar de ${user.username} est : ${user.displayAvatarURL({ format: 'png' })}`;
        });

        message.channel.send(avatarList);
    }
});

client.login(token);