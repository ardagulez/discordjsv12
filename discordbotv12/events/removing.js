const Discord = require('discord.js');
const dbquick = require('quick.db');
let tarih = new Date().toLocaleString("tr-TR" , {timeZone: "Asia/Istanbul"});

module.exports =  member => {
    var kanal = dbquick.fetch(`giriskanali_${member.guild.id}`)
    var kanalcik = member.guild.channels.cache.get(channel);
    if (!kanalcik) return;

    var randomMesjlar = [
        "Hoşgeldin bizi sevindirdin.",
        "Sunucuya hoşgeldin dostum!"
    ]
    var randomMesjlar = randomMesjlar[Math.floor(Math.random() * (randomMesjlar.length))]

    var embedcik = new DiscordMessage()
    .setColor("RED")
    .setAuthor(member.username, member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setDescription(randomMesjlar + member)
    .addField("Ayrılan Kişinin Detayları", `Ayrılan Kişi: **${member}** \n Sunucudan Çıkış Tarihi: **${tarih}** ` )

    return kanal.send(embedcik);
}