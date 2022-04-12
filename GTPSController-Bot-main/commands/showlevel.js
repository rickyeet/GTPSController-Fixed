const Discord = require('discord.js');
const fs = require("fs");
const config = require('./botconfig.json');
module.exports = {
    name: "showlevel",

    async run (client, message, args){
        const defaut_prefix = "q";
        let user = args[0]
        if (user == null)
        {
          return message.reply(`Command = ${defaut_prefix}showlevel [Player]`)
        }

        fs.access(config.player + `\\_${args[0]}.json`, fs.F_OK, (err) => {
          if (err) {
            return  message.reply("Player Not Found!")
          }

        let playername1 = config.player + `\\_${args[0]}.json`
        let playername2 = require(playername1);

        var contents = fs.readFileSync(playername1);
          var jsonContent = JSON.parse(contents);
          var slevel = parseInt(jsonContent.level)
          return message.reply(`${user} Level = ${slevel}`)
        })
       }
    }


