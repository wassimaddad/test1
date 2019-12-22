const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + 657905233195696131 + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`هاي هاي هاي هاي هاي هاي هاي هاي هاي هاي`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "s") {
let rank = message.guild.member(message.author).roles.find('name', 'spamer'); 
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.BOT_TOKEN);
