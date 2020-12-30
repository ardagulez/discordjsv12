const reqEvent = (event) => require(`../events/${event}`);

// - Bot giriş kısmı
module.exports = async(client) => {

var oynuyorkısımları = [
    "Yardım için : -yardım",
    "Türkçe gelişmiş discord botu!",
    "Beni sunucuna eklemek için -davet"
]

setInterval(function() {
        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'WATCHING' });
        }, 1 * 3000);
    
    console.log("Başarılı bir şekilde bot sisteme giriş yaptı.")
}

