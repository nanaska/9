const TelegramApi = require('node-telegram-bot-api')

const token = "2012706332:AAHu8f_ETWqr2vm3N0pgiE8fmQLhMpIQLtk"




const bot = new TelegramApi(token, {polling: true})






const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Старт'},
        {command: '/kakdela', description: 'Как дела?'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if(text ==="/start"){
            await bot.sendMessage(chatId, 'Привет, Маришка❤️‍🔥 ')
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/b48/7e2/b487e222-21cd-4741-b567-74b25f44b21a/1.webp')
        }
        if(text === "/kakdela"){
            return bot.sendMessage(chatId, "Очень сильно люблю Марину")
        }
        return bot.sendMessage(chatId, "Я тебя не понимаю")
    })
}
start()