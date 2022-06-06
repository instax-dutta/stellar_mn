module.exports = {
    name: `invite`,
    description: `<a:hyper:805858547623657564> Bot Invite Link`,
    aliases: ["i","in"],
    cooldown: 1,
    edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
    execute(message) {
      message.reply(`<a:chimkandi:799953991433715723> https://dsc.gg/stellar <a:chimkandi:799953991433715723>`).catch(console.error);
    }
  };
  
  