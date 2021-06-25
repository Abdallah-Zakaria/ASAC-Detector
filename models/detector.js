'use strict';

module.exports = (client)=>{
  client.on("message", (message) => {
    const { content } = message;
    const arabic = /[\u0600-\u06FF]/;
    if (arabic.test(content)) {
      message.channel.send("🚨🛑 YOU ARE ONLY ALLOWED TO SPEAK IN ENGLISH HERE! 🛑🚨");
    }
  });
}