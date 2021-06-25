"use strict";

const Discord = require("discord.js");
const client = new Discord.Client();

require("dotenv").config();
const token = process.env.TOKEN;

const detector = require("./models/detector");

client.on("ready", () => {
  console.log("the bot is ready");
  detector(client);
});

client.login(token);
