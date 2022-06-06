const { canModifyQueue } = require("../util/MilratoUtil");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed"); 
const { PREFIX } = require(`../config.json`);
module.exports = {
  name: "pause",
  description: "<a:cr:805856269721272326> Pause the currently playing music",
  cooldown: 10,
  edesc: `Type this command to pause the Song!\nUsage: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "There is nothing playing").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor("#FF1818")
      .setAuthor(`${message.author.username} paused the music.`, "https://cdn.discordapp.com/emojis/769912238236106793.png")
      .setFooter(`Powered By MajestyNodes|majestynodes.com`)
      //react with approve emoji
      message.react("<a:761334770864226305:805867519272681513>")
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
