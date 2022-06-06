const util = require('minecraft-server-util');
 const Discord = require('discord.js')
module.exports = {
    name: 'mc',
    description: '<a:dirt:808344642365030441> get information about a minecraft server',
    execute(message, args, client){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter the port also with the server ip normally its 25565 ');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#FF1818')
            .setTitle('<a:let_m:799950534181781534><a:let_i:799949799046643722><a:let_n:799950518590898186><a:let_e:799948837660917770><a:let_c:799948641066287104><a:let_r:799950521279840316><a:let_a:799948194128724019><a:let_f:799948947270402048><a:let_t:799950322101256232>')
            .addFields(
                {name: '<a:steve_dance:808351538435063848>Server IP', value: response.host},
                {name: '<:emerald:808348573367402496>Online ', value: response.onlinePlayers},
                {name: '<:diamond:808348960951500830>Max Slots', value: response.maxPlayers},
                {name: '<a:steve_stare:808351523300966471>Version', value: response.version},
                {name: '<:gold:808355952042180629>MOTD', value: response.description}
            )
            .setFooter(`Powered By MajestyNodes|majestynodes.com`);
 
            message.reply(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}