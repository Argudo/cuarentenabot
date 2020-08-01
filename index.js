const Discord = require('discord.js');
const bot = new Discord.Client();
var isReady = true;

bot.on('ready', () =>{
    console.log("Estoy online muyayo!");
})

bot.on('message', msg=>{
    if(msg.content === 'fvirgolini' && isReady){
        msg.delete();
        isReady = false;
        var voiceChannel = msg.member.voice.channel;
        msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './fvirgolini.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
            })
        isReady = true;
        msg.delete();
      }
    else if(msg.content === 'subnormal' && isReady){
        playAudio('5',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'father on father' && isReady){
        playAudio('2',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'alto puto' && isReady){
        playAudio('1',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'djabascal' && isReady){
        playAudio('3',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'doraimon' && isReady){
        playAudio('6',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'y' && isReady){
        playAudio('7',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'insultar' && isReady){
        playAudio('8',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'adios' && isReady){
        playAudio('9',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'mongolo' && isReady){
        playAudio('10',msg);
        isReady = true;
        msg.delete();
    }else if(msg.content === 'armagedon' && isReady){
        playAudio('11',msg);
        isReady = true;
        msg.delete();
    }else if(msg.content === 'me sua la polla' && isReady){
        playAudio('12',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'cuadrito' && isReady){
    playAudio('13',msg);
    isReady = true;
    msg.delete();
    }
    else if(msg.content === 'enzarpaisimo' && isReady){
    playAudio('14',msg);
    isReady = true;
    msg.delete();
    }
    else if(msg.content === 'bebio' && isReady){
        playAudio('15',msg);
        isReady = true;
        msg.delete();
    }
    else if(msg.content === 'respeto' && isReady){
        playAudio('16',msg);
        isReady = true;
        msg.delete();
    }
})

bot.on('message', msg=>{
    if(msg.content === '.list'){
        msg.reply('\n1 - Alto Puto\n2 - Father on father\n3 - DjAbascal\n4 - Fvirgolini\n5 - Subnormal\n6 - Doraimon\n7 - Yeet\n8 - Insultos\n9 - Anda con Dioh\n10 - Mongolo\n11 - Armagedon\n12 - Me sua la polla\n13 - Cuaderno de cuadrito\n14 - Enzarpaisimo\n15 - Bebio\n16 - Respeto');
        let filter = m => !m.author.bot;
        let collector = new Discord.MessageCollector(msg.channel, filter, {max:1});
        collector.on('collect', (m, col) => {
            console.log("Collected message: " + m.content);
            playAudio(m.content, msg)
            msg.delete();
        })
    }
    else if(msg.content.startsWith('.play')){
        let args = msg.content.substring(PREFIX.length).split(" ");
        playAudio(args[1], msg)
        console.log("Reproduciendo " + args[1]);
        msg.delete();
    }
})

bot.on('message', msg=>{
    if(msg.content === '.flope'){
        msg.reply('Vaya buzo de mierda');
    }
})

bot.on('message', msg=>{
    if(msg.content === '.parra'){
        msg.reply('Alguien ha dicho el nombre de mi rey');
    }
})

bot.on('message', msg=>{
    if(msg.content === '.juanma'){
        msg.reply('Zero two no existe <3');
    }
})

bot.on('message', msg=>{
    if(msg.content.startsWith('!')){
        sleep(2000);
        msg.delete();
    }
})
bot.on('message', msg=>{
    if(msg.member.user.tag.startsWith('Rythm')){
        sleep(5000);
        msg.delete();
    }
})

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function playAudio(num, msg){
    isReady = false;
    switch (num){
        case '1':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './AltoPuto.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
            })
        case '2':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './father.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '3':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './djabascal.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '4':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './fvirgolini.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '5':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './subnormal.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '6':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './doraimon.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '7':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './yeet.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '8':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './insultos.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '9':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './adios.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '10':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './mongolo.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '11':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './armagedon.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '12':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './suda.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '13':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './cuadrito.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '14':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './enzarpaisimo.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '15':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './bebio.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
        case '16':
            var voiceChannel = msg.member.voice.channel;
            msg.member.voice.channel.join()
            .then(connection => {
                const dispatcher = connection.play(require("path").join(__dirname, './respeto.mp3'));
                dispatcher.on('finish', finish => voiceChannel.leave());
        })
    }
    isReady = true;
    msg.delete();
}
bot.login(process.env.token);