const Discord = require("discord.js")
const Chalk = require("chalk")
const client = new Discord.Client();
const proton = require("proton-io")
const dbquick = require("quick.db")
const moment = require('moment')
const db = require("wio.db");
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const ms = require('ms');
const { Player } = require("discord-music-player")
const player = new Player(client, {
    leaveOnEnd: true,
    leaveOnStop: false,
    leaveOnEmpty: true,
    quality: 'high',
});
client.player = player;


let komutDosya = "./komutlar"
let event = "./events"
let gelistiriciler = ["263957712507895808"]
let owner = true;
let util = "./util"


const komutYukle = new proton(client,komutDosya,event,util,gelistiriciler,{owner,})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true;
let etiketPrefixOlarakKullan = true;

client.on("message", async message => {
  if (!message.guild) return;

  if (dbquick.has(`sayac_${message.guild.id}`) === true) {
    if (dbquick.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`Başarıyla \`${dbquick.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      dbquick.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = dbquick.fetch(`sKanal_${member.guild.id}`);
  if (dbquick.has(`sayac_${member.guild.id}`) == false) return;
  if (dbquick.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucudan ayrıldı! \`${dbquick.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${dbquick.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = dbquick.fetch(`sKanal_${member.guild.id}`);
  if (dbquick.has(`sayac_${member.guild.id}`) == false) return;
  if (dbquick.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**${member.user.tag}** Sunucuya Katıldı :tada:! \`${dbquick.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${dbquick.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});

client.on('message', async message => {
  if (message.content === 'gir') { // İsterseniz burdaki yazıyı değişebilirsiniz.
    client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
      }
  });

client.on('message', async (msg) => {

    if(!await db.has("prefix_" + msg.guild.id)){
        var prefix = "-"
    } else {
        var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

    komutYukle.message(
        msg,prefix,{botlaraCevapVer,etiketPrefixOlarakKullan,etiketlePrefixOgren})
})

require('events').EventEmitter.prototype._maxListeners = 100;

client.on('message', async (msg, member, guild) => {
    let ysfsaas = await  db.fetch(`saas_${msg.guild.id}`)
        if(ysfsaas === 'açık') {
          if (msg.content.toLowerCase() === 'sa'){
            
          msg.channel.send("**Aleyküm Selam <@" + msg.author.id + "> Nasılsın? 🥰**");    
        const filter = m => m.author.id === msg.author.id;
      msg.channel.awaitMessages(filter, {
        max: 1
      }).then(collected => {
        if (collected.first().content.toLowerCase() === 'iyiyim') {
          return msg.reply("**Her zaman iyi ol kankam 😇**");
        }});
          }
        }
      });
  
  
  client.on('message', async (msg, member, guild) => {
    let ysfsaas = await  db.fetch(`saas_${msg.guild.id}`)
        if(ysfsaas === 'açık') {
          if (msg.content.toLowerCase() === 'sea'){
            
          msg.channel.send("**Aleyküm Selam <@" + msg.author.id + "> Nasılsın? 🥰**");    
        const filter = m => m.author.id === msg.author.id;
      msg.channel.awaitMessages(filter, {
        max: 1
      }).then(collected => {
        if (collected.first().content.toLowerCase() === 'iyiyim') {
          return msg.reply("**Her zaman iyi ol kankam 😇**");
        }});
          }
        }
      });

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "oç") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "orospu") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "çocuğu") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "göt") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "piç") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "anasını") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "ananı") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

client.on("message" , (message) => {
    if(message.content.toLowerCase() === "ibne") {
        message.reply("Çok ayıp bir daha öyle bir şey çıkmasın ağzından!")
        message.delete()
    }
})

const botadi = "Raikou"

client.on('guildBanAdd', async (guild, user) => {
  let modlogs = dbquick.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
  let modlogs = dbquick.get(`modlogkanaly_${guild.id}`)
   const modlogkanal = guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir kişinin yasağı kaldırıldı")
     .setThumbnail(user.avatarURL()||user.defaultAvatarURL)
     .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });


 client.on('channelCreate', async channel => {
  let modlogs = dbquick.get(`modlogkanaly_${channel.guild.id}`)
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     if (channel.type === "text") {
       let embed = new Discord.MessageEmbed()
       .setColor("#fffa00")
       .setAuthor("Bir Kanal Oluşturuldu")
       .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
       .addField(`Oluşturulan Kanalın Türü : `, `Yazı`)
       .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
       .setFooter(`${botadi} | Mod-Log Sistemi`)
       .setTimestamp()
       modlogkanal.send(embed)
     }
       if (channel.type === "voice") {
       
         let embed = new Discord.MessageEmbed()
         .setColor("#fffa00")
         .setAuthor("Bir Kanal Oluşturuldu")
         .addField(`Oluşturulan Kanalın İsmi : `, `${channel.name}`)
         .addField(`Oluşturulan Kanalın Türü : `, `Ses`)
         .addField(`Kanalı Oluşturan : `, `<@${user.id}>`)
         .setFooter(`${botadi} | Mod-Log Sistemi`)
         .setTimestamp()
         modlogkanal.send(embed)
 
 
     }
 }});

 client.on('channelDelete', async channel => {
  let entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
let user = client.users.cache.get(entry.executor.id)
let modlogs = dbquick.get(`modlogkanaly_${channel.guild.id}`)
const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if(!modlogs) return;
if(modlogs) {
if (channel.type === "text") {
let embed = new Discord.MessageEmbed()
.setColor("#fffa00")
.setAuthor("Bir Kanal Silindi")
.addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
.addField(`Silinen Kanalın Türü : `, `Yazı`)
.addField(`Kanalı Silen : `, `<@${user.id}>`)
.setFooter(`${botadi} | Mod-Log Sistemi`)
.setTimestamp()
modlogkanal.send(embed)
}
  if (channel.type === "voice") {

    let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor("Bir Kanal Silindi")
    .addField(`Silinen Kanalın İsmi : `, `${channel.name}`)
    .addField(`Silinen Kanalın Türü : `, `Ses`)
    .addField(`Kanalı Silen : `, `<@${user.id}>`)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
   }
  }
});

client.on('roleDelete', async role => {
  let modlogs =  dbquick.get(`modlogkanaly_${role.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
  const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Rol Silindi")
     .addField(`Silinen Rolün İsmi : `, `${role.name}`)
     .addField(`Rolü Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
 
 client.on('emojiDelete', async emoji => {
  let modlogs = dbquick.get(`modlogkanaly_${emoji.guild.id}`)
  let entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
   const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
   if(!modlogs) return;
   if(modlogs) {
     let embed = new Discord.MessageEmbed()
     .setColor("#fffa00")
     .setAuthor("Bir Emoji Silindi")
     .addField(`Silinen Emojinin İsmi : `, `${emoji.name}`)
     .addField(`Emojiyi Silen : `, `<@${user.id}>`)
     .setFooter(`${botadi} | Mod-Log Sistemi`)
     .setTimestamp()
     modlogkanal.send(embed)
   }
 });
  

 client.on('roleCreate', async role => {
  let modlogs =  dbquick.get(`modlogkanaly_${role.guild.id}`)
  let entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first())
  let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = role.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Rol Oluşturuldu")
      .addField(`Oluşturulan Rolün İsmi : `, `${role.name}`)
      .addField(`Rolü Oluşturan : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });
  
  
  client.on('emojiCreate', async emoji => {
   let modlogs = dbquick.get(`modlogkanaly_${emoji.guild.id}`)
   let entry = await role.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first())
   let user = client.users.cache.get(entry.executor.id)
    const modlogkanal = emoji.guild.channels.cache.find(kanal => kanal.id === modlogs);
    if(!modlogs) return;
    if(modlogs) {
      let embed = new Discord.MessageEmbed()
      .setColor("#fffa00")
      .setAuthor("Bir Emoji Oluşturuldu")
      .addField(`Oluşturulan Emojinin İsmi : `, `${emoji.name}`)
      .addField(`Emoji Silen : `, `<@${user.id}>`)
      .setFooter(`${botadi} | Mod-Log Sistemi`)
      .setTimestamp()
      modlogkanal.send(embed)
    }
  });

//MESAJ LOG
client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.content.startsWith(prefix)) return;
  let sc = await dbquick.fetch(`modlogkanaly_${newMessage.guild.id}`);
  let scbul = newMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL())
    .addField("Kullanıcı", newMessage.author)
    .addField("Eski Mesaj", "```" + oldMessage.content + "```")
    .addField("Yeni Mesaj", "```" + newMessage.content + "```")
    .addField("Kanal Adı", newMessage.channel.name)
    .addField("Mesaj ID", newMessage.id)
    .addField("Kullanıcı ID", newMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours() +
        3}:${newMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on("messageDelete", async deletedMessage => {
  if (deletedMessage.author.bot || deletedMessage.channel.type === "dm") return;
  if (deletedMessage.content.startsWith(prefix_)) return;
  let sc = await dbquick.fetch(`modlogkanaly_${deletedMessage.guild.id}`);
  let scbul = deletedMessage.guild.channels.cache.get(sc)
  if(!scbul) {
    
  }
  let embed = new Discord.MessageEmbed()
    .setColor("#fffa00")
    .setAuthor(`Mesaj Silindi`, deletedMessage.author.avatarURL())
    .addField("Kullanıcı", deletedMessage.author)
    .addField("Silinen Mesaj", "```" + deletedMessage.content + "```")
    .addField("Kanal Adı", deletedMessage.channel.name)
    .addField("Mesaj ID", deletedMessage.id)
    .addField("Kullanıcı ID", deletedMessage.author.id)
    .setFooter(`Bilgilendirme  • bügün saat ${deletedMessage.createdAt.getHours() +
        3}:${deletedMessage.createdAt.getMinutes()}`
    );
  scbul.send(embed);
});

client.on('ready', async () => {// Can°B#1308
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }
  
    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  };
client.guilds.cache.forEach(async guild => {
const asd = await dbquick.fetch(`..başladı.${guild.id}`);
if(asd) {
const interval = setInterval(async function(){
const kalanzaman = asd.süre - Date.now()   
const c = await guild.channels.cache.get(asd.channel).messages.fetch(asd.message);
if (kalanzaman <= 0) {
clearInterval(interval)
await sleep(50)
const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}`)
.setTimestamp(asd.süre)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)
dbquick.delete(`çk.${c.id}`)
dbquick.delete(`ödü.${c.id}`)
dbquick.delete(`ma.${c.id}`)
const asdd = await c.reactions.get('🎉').users.fetchs({limit: c.reactions.get('🎉').count})
guild.channels.cache.get(asd.channel).send(`Tebrikler, ${asdd.random()}! Bizden ${asd.ödül} kazandın.
Ödülünü alabilmek için: ${asd.host1} kişisine ulaş.`)
dbquick.delete(`..başladı.${guild.id}`);
} else {
const kalanzamanyazi = destructMS(kalanzaman)
const embed2 = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
embed2.setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed2)
                }
}, 5000)
}
})
})// codare ♥

client.on("message", async msg => {

  let saas = await db.fetch(`saas_${msg.guild.id}`);

  if (saas == 'kapali') return;

  if (saas == 'acik') {

  if (msg.content.toLowerCase() === 'sa') {

    msg.reply('ve aleykum selam kardeeeeş');

  }

  }

});


client.on('guildMemberAdd', member => {
  let channel = dbquick.fetch(`hoşgeldin.${member.guild.id}`)
  if(!channel) return;

  let hosgeldin = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(`${member.user.username} Sunucuya katıldı!`)
  .setDescription('<@>'+member.id+'> Sunucuya hoşgeldin!')
  .setTimestamp()
  client.channels.cache.get(kanal).send(hosgeldin)
})


client.on('guildMemberAdd', member => {
  let kanal = dbquick.fetch(`güvenlik.${member.guild.id}`)
  if(!kanal) return;

    let aylar = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            "10": "Ekim",
            "11": "Kasım",
            "12": "Aralık"
 }

let bitiş = member.user.createdAt
   let günü = moment(new Date(bitiş).toISOString()).format('DD')
   let ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
  let yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
  let saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

let günay = `${günü} ${ayı} ${yılı} ${saati}`  

   let süre = member.user.createdAt
   let gün = moment(new Date(süre).toISOString()).format('DD')
   let hafta = moment(new Date(süre).toISOString()).format('WW')
   let ay = moment(new Date(süre).toISOString()).format('MM')
   let ayy = moment(new Date(süre).toISOString()).format('MM')
   let yıl =  moment(new Date(süre).toISOString()).format('YYYY')
  let yıl2 = moment(new Date().toISOString()).format('YYYY')

  let netyıl = yıl2 - yıl

  let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`

  let kontrol;
  if(süre < 1296000000) kontrol = 'Bu hesap şüpheli!'
  if(süre > 1296000000) kontrol = 'Bu hesap güvenli!'

  let codare = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle(`${member.user.username} Katıldı`)
  .setDescription('<@'+member.id+'> Bilgileri : \n\n  Hesap oluşturulma tarihi **[' + created + ']** (`' + günay + '`) \n\n Hesap durumu : **' + kontrol + '**')//codare
  .setTimestamp()
  client.channels.cache.get(kanal).send(codare)
})

//client.on('ready', () =>{
//    client.channels.cache.get("784155784036089916").join()
//    client.guilds.cache.get('444972565564358656').members.cache.get(client.user.id).voice.setSelfMute(true)
//})

client.login(ayarlar.token);