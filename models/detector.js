"use strict";

const Discord = require("discord.js");

require("dotenv").config();
const logs = process.env.LOGS;

module.exports = (client) => {
  client.on("message", async (message) => {
    if (message.channel.id !== logs) {
      const { content } = message;
      const arabic = /[\u0600-\u06FF]/;
      if (arabic.test(content)) {
        const channelName = message.channel.name;
        const userName = message.author.username;
        const avatar = message.author.avatarURL();
        const id = message.author.id;

        const embed = new Discord.MessageEmbed()
          .setTitle(`ASAC Detector`)
          .setAuthor(userName, avatar)
          .setFooter(`by Abdallah Zakaria`)
          .setColor("#f44336")
          .setDescription(
            `🚨🛑 You are only allowed to speak in English! 🛑🚨`
          );
        message.reply(embed);
        message.delete();

        const channel = await client.channels.fetch(logs);
        const embedLog = new Discord.MessageEmbed()
          .addFields(
            { inline: true, name: "User", value: `<@${id}>` },
            { inline: true, name: "Channel", value: channelName },
            { inline: true, name: "Message", value: content }
          )
          .setAuthor(userName, avatar)
          .setColor("#008CBA");
        channel.send(embedLog);
      }
    }
  });
};
