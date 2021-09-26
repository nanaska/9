const TelegramApi = require('node-telegram-bot-api')

const TOKEN = "2012706332:AAHu8f_ETWqr2vm3N0pgiE8fmQLhMpIQLtk"
const modelComl = require('./models/comliment.model')

const mongoose = require('mongoose')
const { db } = require('./models/comliment.model')

const bot = new TelegramApi(TOKEN, {polling: true})

const createComp = async() => {
    await  modelComl.create({
        id: 6,
        text: 'Мое утро начинается не с кофе, а мысли о тебе.'
    })
    
    await  modelComl.create({
        id: 7,
        text: 'Все, что мне нужно для счастья – это ты.'
    
    })
    await  modelComl.create({
        id:8,
        text:"Ты мой любимый вид наркотиков и алкоголя."
    })
    await  modelComl.create({
        id:9,
        text:"Я не смотрю на твои потрясающие сиськи. Я смотрю на горячее сердце."
    })
    await  modelComl.create({
        id:10,
        text:"Твои уста сладкие и манящие, словно мед. А я «мохнатый пчол»."
    })
}


mongoose.connect(`
mongodb+srv://voose:admin@cluster0.xhj1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(tea => console.log('успешно')).catch(e => console.log(e))



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
        const text = msg.text;
        const chatId = msg.chat.id;
        
        if(text ==="/start"){
            const Posts = await modelComl.findOne({id: getRandomInt()})
            
            await bot.sendMessage(chatId, 'Привет, Маришка❤️‍🔥 ');
            await bot.sendMessage(chatId, `${Posts.text}`)
            await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/b48/7e2/b487e222-21cd-4741-b567-74b25f44b21a/8.webp")
            await bot.sendMessage(904952417, `Отправлено`)
        }
        
        
    })
}
start()