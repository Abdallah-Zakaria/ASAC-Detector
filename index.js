"use strict";

const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();
const token = process.env.TOKEN;

const detector = require("./models/detector");

client.on("ready", () => {
  console.log("The bot is ready.");
  detector(client);

  client.user.setPresence({
    activity: {
      name: 'developed by Abdallah Zakaria',
      type: 0,
    },
  });
});

client.login(token);