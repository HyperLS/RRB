const Discord = require("discord.js");
const client = new Discord.Client({ws:{
properties: {
$browser: `Discord iOS`,
$device: `Discord iOS`
}
}});
const colors = ["RANDOM"];
const stop = [];

client.on("guildCreate", guild => {
  let channels = guild.channels.filter(
    channel =>
      channel.type === "text" &&
      channel
        .permissionsFor(guild.members.get(client.user.id))
        .has("SEND_MESSAGES")
  );
  if (channels.size > 0) channels.first().send("");
});
client.on("message", message => {
  if (message.channel.type !== "text") return;
  if (message.content === "!off") {
    stop.push(message.guild.id);
    return message.channel.send({
      embed: {
        title:
          "Off",
        color: 0xff2222
      }
    });
  }
  if (message.content === "!on") {
const Discord = require("discord.js");
const client = new Discord.Client();
const stop = [];
  }
});
client.on("guildCreate", guild => {
  let channels = guild.channels.filter(
    channel =>
      channel.type === "text" &&
      channel
        .permissionsFor(guild.members.get(client.user.id))
        .has("SEND_MESSAGES")
  );
  if (channels.size > 0) channels.first().send("");
});
client.on("message", message => {
  if (message.channel.type !== "text") return;
  if (message.content === "!off2") {
    stop.push(message.guild.id);
    return message.channel.send({
      embed: {
        title:
          "off",
        color: 0xff2222
      }
    });
  }
  if (message.content === "!on") {
    stop.splice(stop.indexOf(message.guild.id), 1);
    return message.channel.send({
      embed: {
        title:
          "On",
        color: 0x00ff00
      }
    });
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setStatus("online");
});

    client.on('message', message => {//new msg event
  if(!message.channel.guild) return;
  if(message.content.startsWith('RR!setup')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'Rainbow')
    if(role) return message.channel.send(`❌ **this role is Already setup**`)//if the role already created return with this msg
  //start of create role 
  if(!role){
   role = message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
 
})


}
message.channel.send('✅ **Successfully Set Up**')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => { 
                  var role =g.roles.find('name', 'Rainbow');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 70000); //the rainbow time

})         
client.on("ready", () => {
    client.user.setActivity("Invite Your Friends To The Server @ join-my-discord.glitch.me");
});
client.login(process.env.TOKEN);
