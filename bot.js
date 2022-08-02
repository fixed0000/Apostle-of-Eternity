const { Client, GatewayIntentBits, userMention, Guild } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("$sum")) {
        message.channel.send("лови");
        const args = message.content.split(" ")
        let sum = 0
        for (let i = 1; i < args.length; i++) {
            sum += Number(args[i])
        }
        console.log(sum);
        message.channel.send(sum.toString())
    }
    if (message.content == "я русский") {
        message.channel.send("ты чурка");
    }

    if (message.content == "я украинец") {
        message.channel.send("ты айрон");
    }

    if (message.content == "$help") {
        message.channel.send(`$sum someNumbersHere - сумма чисел
        !voteban authorMention`);
    }

    if (message.content.startsWith("!voteban")) {
        message.channel.send(`Голосование за бан ${message.mentions.members.first()}. Пять реактов - бан`);
    }
});

client.on("roleCreate", (role) =>
{
    if (message.content == `$role`)     
    {
        let colorRole = "BLUE"
        switch (message.content) {
                case message.content.includes("blue"): 
                    colorRole = "BLUE";
                case message.content.includes("random"):
                    colorRole = "random";
                default:
                    colorRole = "default";
        }
        role.guild.roles.create
            ({
            name: `${role.color} Role++`,
            color: colorRole,
            reason: 'we needed a role for Super Cool People',
            })
            .then(console.log)
            .catch(console.error);
        message.channel.send(`Роль с цветом ${colorRole}`)
    }
});

client.login("OTkzMTU2NjkxOTYzMTYyNjY0.Gb-qFa.ELdKZkbQFGoscM9_QpBpyRR48D4phZkaahp3zY");