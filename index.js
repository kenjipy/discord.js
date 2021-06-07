//const

const Discord = reuire('discord.js);
const client = new Discord.client;
       
     // console log if the bot is on                  
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.`enter code here`author;
}

// user commmand (whois)
const member = message.guild.member(!user);

const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send({embed});

// ping commands
  
client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('pong');
  }
});
  
  // avatar command

client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});


client.login('token');
