module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.7",
    author: "Tamim",
    countDown: 5,
    role: 0,
    category: "system"
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const obfuscatedAuthor = String.fromCharCode(77, 97, 104, 77, 85, 68); 
      if (this.config.author !== obfuscatedAuthor) {
      return api.sendMessage("You are not authorized to change the author name.\n", event.threadID, event.messageID);
    }

      const query = encodeURIComponent(args.join(' '));
      message.reply("𝐛𝐚𝐛𝐲 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐢𝐧𝐛𝐨𝐱 🐤", event.threadID);
      api.sendMessage("𝐡𝐢 𝐛𝐚𝐛𝐲😘", event.senderID);
    } catch (error) {
      console.error("error baby: " + error);
    }
  }
};
