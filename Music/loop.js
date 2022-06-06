////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/MilratoUtil");
const { MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const { PREFIX } = require(`../config.json`);
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "<a:cr:805856269721272326> Toggle music loop",
  cooldown: 10,
  edesc: `Just type the Command in the chat to activate/deactivate loop, you can also react to the loop emoji, to receive the same goal!\nUsage: ${PREFIX}loop`,
async execute(message) {
    //if not in a Guild return
    if(!message.guild) return;
    //Get the current Queue
    const queue = message.client.queue.get(message.guild.id);
    //If no Queue Error
    if (!queue) return attentionembed(message, "There is nothing playing").catch(console.error);
    //If not in a VOICE 
    if (!await canModifyQueue(message.member)) return;
    //Reverse the Loop state
    queue.loop = !queue.loop;
    //Define the Loop embed
    const loopembed = new MessageEmbed()
    .setColor(queue.loop ? "#FF1818" : "#FF1818")
    .setAuthor(`Loop is now ${queue.loop ? " enabled" : " disabled"}`, "https://cdn.discordapp.com/emojis/769913064194834511.png")
    .setFooter(`Powered By MajestyNodes|majestynodes.com`)
    //react with approve emoji
    message.react("<a:761334770864226305:805867519272681513>");
    //send message into the Queue chat
    return queue.textChannel
      .send(loopembed)
      .catch(console.error);
  }
};
