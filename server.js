// ================= START BOT CODE =================== 

const Discord = require('discord.js'); 

const client = new Discord.Client(); 

 

client.on('ready', () => { 

console.log(`Logged in as ${client.user.tag}!`); 

client.user.setActivity("Created By Oximy#5219") 

}); 

 

client.on('message', msg => { 

if (msg.content === 'ping') { 

msg.reply('pong!'); 

} 

}); 

// You really don't want your token here since your repl's code 

// is publically available. We'll take advantage of a Repl.it 

// feature to hide the token we got earlier. 

client.login(ODM1NTI4MTkwNDc4NTE2MjQ1.YIQwQw.Bn5vkVVp5WbD36q-TwpSuWKk3ko);

