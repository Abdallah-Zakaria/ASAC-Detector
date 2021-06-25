"use strict";

const Discord = require("discord.js");

module.exports = (client) => {
  client.on("message", async (message) => {
    console.log(message)
    const { content } = message;
    const arabic = /[\u0600-\u06FF]/;
    if (arabic.test(content)) {
      const channelName = message.channel.name;
      const userName = message.author.username;
      message.channel.send(
        "🚨🛑 YOU ARE ONLY ALLOWED TO SPEAK IN ENGLISH HERE! 🛑🚨"
      );
      const channel = await client.channels.fetch("858123323653357598");
      const embed = new Discord.MessageEmbed()
        .setDescription(
        `
        We found ${userName} that assign in ${channelName} writing in Arabic.
        ${content}
        `
        )
        .setTitle("Writing Arabic")
        .setFooter("Warning")
        .setColor("#b006c6");
      channel.send(embed);
    }
  });
};
