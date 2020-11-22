const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let kanal = await db.fetch(`davetkanal_${message.guild.id}`);
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Davet kanalı: <#${kanal}> `);
  message.channel.send(embed);
};

module.exports.conf = {
  aliases: ["davetkanalne"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-ne",
  description: "davet-kanal-ne",
  usage: "davet-kanal-ne"
};
