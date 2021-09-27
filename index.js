const TelegramApi = require('node-telegram-bot-api')

const TOKEN = "1998862426:AAFUxY17xQgDrzxro7r_WPN02_fUhrsnu4A"
const modelComl = require('./models/comliment.model')

const mongoose = require('mongoose')


const bot = new TelegramApi(TOKEN, {polling: true})
mongoose.connect(`
mongodb+srv://voose:admin@cluster0.xhj1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(tea => console.log('успешно')).catch(e => console.log(e))

const createComp = async() => {
    await  modelComl.create({
        id: 1,
        text: 'Надеюсь, что наши дети будут похожи на тебя.',
        sticker: 'https://tlgrm.ru/_/stickers/677/924/677924c9-00af-439e-9c11-c18d6b2013ca/9.webp'
    })
    
    await  modelComl.create({
        
        
        id: 2,
        text: 'Я бы сравнил тебя с цветком, но такого красивого не существует.',
        sticker: 'https://tlgrm.ru/_/stickers/cdb/d29/cdbd2943-5c75-34c3-a339-bf6e9b524b53/2.jpg'
    
    })
    await  modelComl.create({
        id:3,
        text:"В толпе людей подсознательно пытаюсь найти тебя.",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/1.jpg'
    })
    await  modelComl.create({
        id:4,
        text:"Ты покорила меня своим совершенством. Порой мне кажется, что так не бывает.",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/6.jpg'
    })
    await  modelComl.create({
        id:6,
        text:"Твои уста сладкие и манящие, словно мед. А я «мохнатый пчол».",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/19.jpg'
    })
    await  modelComl.create({
        id:7,
        text:"У тебя отличный белоснежная кожа.",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/29.jpg'
    })
    await  modelComl.create({
        id:8,
        text:"У тебя шаловливый и непосредственно детский характер.",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/39.jpg'
    })
    await  modelComl.create({
        id:9,
        text:"У тебя прекрасный и необычный цвет глаз.",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/66.jpg'
    })
    await  modelComl.create({
        id:10,
        text:"Твои уста сладкие и манящие, словно мед. А я «мохнатый пчол».",
        sticker: 'https://tlgrm.ru/_/stickers/cbe/e09/cbee092b-2911-4290-b015-f8eb4f6c7ec4/60.jpg'
    })
}



const MARINA = "822153801"

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(11);
    return chislo = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  
const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Старт'}
        
    ])

    bot.on('message', async msg => {
        const prishlo = msg.audio
        const text = msg.text;
        const chatId = msg.chat.id;


        if(text ==="/start"){
            
            const Posts =  modelComl.findOne({id: getRandomInt()})
            
            
             bot.sendMessage(chatId, 'Привет, Маришка❤️‍🔥 ');
             bot.sendMessage(chatId, `${Posts.text}`)
             bot.sendPhoto(chatId, `${Posts.sticker}`)
            
             bot.sendMessage(605598157, `${chatId}, кто то посмотрел`)
        }
        if(text === "/sendmarina"){
            bot.sendMessage(MARINA, `Я тебя люблю❤️‍🔥` )
        }
        
        
    })
}
start()