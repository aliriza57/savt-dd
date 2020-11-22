const Discord = require('discord.js');

exports.run = (client, message) => {
    let zulapng = "https://images.skin.club/img/cases/our_case/virre_case.png?policy=case-xxl"
    var destedencikanlar = [
        "https://hizliresim.com/yzrtXs",
        "https://hizliresim.com/yRBKBm",
        "https://hizliresim.com/j2hR28",
        "https://hizliresim.com/4CmMmy",
        "https://hizliresim.com/CdJITe",
        "https://hizliresim.com/khFBmn",
        "https://hizliresim.com/yNM6r9",
        "https://hizliresim.com/iE9emF",
        "https://hizliresim.com/M3A8Xq",
        "https://hizliresim.com/ab88S4",
        "https://hizliresim.com/evA19p",
        "https://hizliresim.com/XOrPAr",
        "https://hizliresim.com/KtcqCn",
        "https://hizliresim.com/EOi5qp",
        "https://hizliresim.com/KcPw1O",
        "https://hizliresim.com/qmIwrD",
        "https://hizliresim.com/bZrKY1",
        "https://hizliresim.com/9KWWqn",
        "https://hizliresim.com/6o4h9W",
        "https://hizliresim.com/bZrKY1",
        "https://hizliresim.com/KcPw1O",
        "https://hizliresim.com/KtcqCn",
        "https://hizliresim.com/XOrPAr",
        "https://hizliresim.com/evA19p",
        "https://hizliresim.com/ab88S4",
        "https://hizliresim.com/M3A8Xq",
        "https://hizliresim.com/yNM6r9",
        "https://hizliresim.com/j2hR28",
        "https://hizliresim.com/yRBKBm",
        "https://hizliresim.com/yzrtXs",
        
  
    ]
    var destedencikanlar = destedencikanlar[Math.floor(Math.random(1) * destedencikanlar.length)]
    const embed  = new Discord.RichEmbed()
    .setImage("")
    .setAuthor('BAŞLANGIÇ KASASI', zulapng)
    .setDescription(`${destedencikanlar}`)
    .setFooter(`Desteyi açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['başlangiç'],
  permLevel: 0,
  kategori: "Oyun"
};
exports.help = {
  name: 'başlangıç',
  description: 'town',
  usage: 'başlangıç'
}