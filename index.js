const Discord = require("discord.js") 
const bot = new Discord.Client()

bot.login('NDQ3NzQ2Mjk2NjMyMDQ5Njg1.DeMDwg.7ufLfPa2ZPJ3XstHoYxRO7LFKw8')

bot.on('message', function (message) {
    if (message.content === '^meteo' ) {
        message.reply ('tien la Météo http://www.meteofrance.com/accueil')
    }
})
bot.on('message', function (message) {
    if (message.content === '^heure' ) {
        message.reply ('tien heure time.is/fr/Paris ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^jour' ) {
        message.reply ('nous sommes le http://www.jour.fr/')
    }
})
bot.on('message', function (message) {
    if (message.content === '^help' ) {
        message.reply ('Les commandes : ^meteo ^jour ^heur ^stat ^help ^staff ^bienvenu ^information ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^stat' ) {
        message.reply ('SE bot crée par M4STER (CBD)  ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^staff' ) {
        message.reply ('Fondateur : Darren-Feather, Milka | Gérant : Axel-Axel | Architecte : Youssef-YSSF  ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^Bienvenu' ) {
        message.reply ('Bienvenue sur le discord de Firerp ! Rejoins notre communeauté, un rétro hors du commun qui se démarque des autres serveurs rp."  ')
    }
})
bot.on('message', function (message) {
    if (message.content === '^Information' ) {
        message.reply ('Les recrutements sont fermé ! ')
    }
})
