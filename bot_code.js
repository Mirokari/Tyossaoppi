const Discord = require("discord.js");
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const prefix1 = "..";


client.login("");

var fortunes = [
    "Yes",
    "No",
    "Probably",
    "Don't count on it"
];


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("guildMemberAdd", (member) => {
  newUsers.set(member.id, member.user);
});

client.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});

client.on("guildMemberAdd", (member) => {
    member.guild.channels.find("name", "welcome").send(member.toString() + " Welcome!");
  
});

client.on("message", function(message) {

    if (message.author.equals(client.user)) return;
    if (message.channel.id != '378968908461244426') return;

    if (!message.content.startsWith(prefix1)) return;


    
    var args = message.content.substring(prefix1.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "help":
            message.guild.channels.find("name", "bot-abuse").send("```help to see all commands\n8ball for fun```");  
        break;

        case "8ball":
            if (args[1]){
                message.guild.channels.find("name", "bot-abuse").send(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            }else{
                message.guild.channels.find("name", "bot-abuse").send("Can't read that");
            }
        break;

        case "idol":
            if (args[1]) {
                if (args[1] == "yoshiko"){
                    var card = Math.floor(Math.random() * 20);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/yoshiko/" + card + ".png"]}); 
                }else if (args[1] == "riko"){
                    var card = Math.floor(Math.random() * 18);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/riko/" + card + ".png"]}); 
                }else if (args[1] == "chika"){
                    var card = Math.floor(Math.random() * 17);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/chika/" + card + ".png"]}); 
                }else if (args[1] == "dia"){
                    var card = Math.floor(Math.random() * 16);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/dia/" + card + ".png"]}); 
                }else if (args[1] == "eli"){
                    var card = Math.floor(Math.random() * 31);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/eli/" + card + ".png"]}); 
                }else if (args[1] == "hanamaru"){
                    var card = Math.floor(Math.random() * 17);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/hanamaru/" + card + ".png"]}); 
                }else if (args[1] == "hanayo"){
                    var card = Math.floor(Math.random() * 29);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/hanayo/" + card + ".png"]}); 
                }else if (args[1] == "honoka"){
                    var card = Math.floor(Math.random() * 36);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/honoka/" + card + ".png"]}); 
                }else if (args[1] == "kanan"){
                    var card = Math.floor(Math.random() * 16);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/kanan/" + card + ".png"]}); 
                }else if (args[1] == "kotori"){
                    var card = Math.floor(Math.random() * 33);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/kotori/" + card + ".png"]}); 
                }else if (args[1] == "maki"){
                    var card = Math.floor(Math.random() * 32);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/maki/" + card + ".png"]}); 
                }else if (args[1] == "nico"){
                    var card = Math.floor(Math.random() * 31);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/nico/" + card + ".png"]}); 
                }else if (args[1] == "nozomi"){
                    var card = Math.floor(Math.random() * 29);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/nozomi/" + card + ".png"]}); 
                }else if (args[1] == "rin"){
                    var card = Math.floor(Math.random() * 28);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/rin/" + card + ".png"]}); 
                }else if (args[1] == "ruby"){
                    var card = Math.floor(Math.random() * 17);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/ruby/" + card + ".png"]}); 
                }else if (args[1] == "umi"){
                    var card = Math.floor(Math.random() * 31);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/umi/" + card + ".png"]}); 
                }else if (args[1] == "you"){
                    var card = Math.floor(Math.random() * 17);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/you/" + card + ".png"]}); 
                }else if (args[1] == "mari"){
                    var card = Math.floor(Math.random() * 16);
                message.guild.channels.find("name", "bot-abuse").send("", {files:["./cards/mari/" + card + ".png"]}); 
                }
            }
        break;

        default:
            message.channel.send("Invalid command. Type ..help to see all the commands.");
    }
});
