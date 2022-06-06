const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `<a:cr:805856269721272326> Gives you a list of all help Commands`,
  aliases: ["h","commands"],
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message,args,client) {
     
    let commands = message.client.commands.array();
 
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:cr:805856269721272326><a:let_s:799950449062838275><a:let_t:799950322101256232><a:let_e:799948837660917770><a:let_L:799950317486866442><a:let_L:799950317486866442><a:let_a:799948194128724019><a:let_r:799950521279840316><a:cr:805856269721272326>")
      .setDescription(`**Version:** \`v3.2\` \n**PREFIX:** \`${PREFIX}\``)
      .setFooter( client.user.username + ` is powered By MajestyNodes `, "https://cdn.discordapp.com/attachments/799949974363832321/807549011007111168/761334770864226305.gif")
      .setColor("#FF1818")
      .setImage("https://cdn.discordapp.com/attachments/791630784284065794/815529328313892874/standard_20.gif");

      let ifargstruedothis = -1;
      
      switch(args[0]){
          case "filter":
           ifargstruedothis=0;
          break;
          case "loop":
            ifargstruedothis=1;
          break;
          case "lyrics":
            ifargstruedothis=2
          break;
          case "nowplaying":
            ifargstruedothis=3
          break;
          case "pause":
            ifargstruedothis=4
          break;
          case "play":
            ifargstruedothis=5
          break;
          case "playlist":
            ifargstruedothis=6
          break;
          case "queue":
            ifargstruedothis=7
          break;
          case "radio":
            ifargstruedothis=8
          break;
          case "remove":
            ifargstruedothis=9
          break;
          case "resume":
            ifargstruedothis=10
          break;
          case "search":
            ifargstruedothis=11
          break;
          case "shuffle":
            ifargstruedothis=12
          break;
          case "skip":
            ifargstruedothis=13
          break;
          case "skipto":
            ifargstruedothis=14
          break;
          case "stop":
            ifargstruedothis=15
          break;
          case "volume":
            ifargstruedothis=16
          break;
          case "help":
            ifargstruedothis=17
          break;
          default:        
            commands.forEach((cmd) => {
              helpEmbed.addField(
                `**${message.client.prefix}${cmd.name}**`,
                `${cmd.description}`,
                true
              );
            });
          if(!message.guild) {
            if(!args[0]) {message.react("<a:tick:800021366152888396>");return message.author.send(helpEmbed);}
            return
            }
            message.react("<a:tick:800021366152888396>");
            message.author.send(new MessageEmbed().setColor("#FF1818")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`))
            message.author.send(helpEmbed)
            message.channel.send( new MessageEmbed().setColor("#FF1818")
            .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Commands!**\nNote: If didn't got then please check if you have DMs Open`)
            .setFooter(`Powered By MajestyNodes|majestynodes.com`)
            );
           
        break;
       }
     
       if(ifargstruedothis>=0){
         let aliases = commands[ifargstruedothis].aliases;
         if(aliases === undefined || !aliases) aliases="No Aliases!";
         let cooldown = commands[ifargstruedothis].cooldown;
         if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


        helpEmbed.addField(
          `**${message.client.prefix}${commands[ifargstruedothis].name}**`,
          `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
        );
        helpEmbed.addField(
          `**:notes: Aliases:**`,
          `\`${aliases}\``
        );
        helpEmbed.addField(
          `**:wrench: Cooldown:**`,
          `\`${cooldown}\``
        );
        if(!message.guild) return message.author.send(helpEmbed);
          message.author.send(helpEmbed)
          message.channel.send( new MessageEmbed().setColor("#FF1818")
          .setDescription(`**👍 ${message.author} Check your \`direct messages\` for a list of Commands!**`)
          .setFooter(`Powered By Majesty Nodes (majestynodes.com)`)
          );
       }

}
} 
