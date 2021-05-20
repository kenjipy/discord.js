const Discord = reuire('discord.js);
const client = new Discord.client;
                       
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message", msg=> {
  if (messag.content === '!server') {
  const embed = new MessageEmbed()
  .setTitle('')


client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});


client.login('token');
