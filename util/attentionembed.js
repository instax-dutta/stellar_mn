const {  MessageEmbed } = require("discord.js");

module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react("<a:red_tick:800023060996292638>");
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle("<a:red_tick:800023060996292638> | " + titel)
      .setColor("#ff0e7a")
      
      message.channel.send(resultsEmbed);
    return;

  }
};
