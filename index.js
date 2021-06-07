//const

const Discord = reuire('discord.js);
const client = new Discord.client;
       
     // console log if the bot is on                  
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// servver commands not ready 
client.on('message", msg=> {
  if (messag.content === '!server') {
  const embed = new MessageEmbed()
  .setTitle('')

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
