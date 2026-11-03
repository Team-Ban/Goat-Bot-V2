const moment = require("moment-timezone");
const axios = require("axios");
const pidusage = require("pidusage");
const { performance } = require("perf_hooks");

moment.tz.setDefault("Asia/Dhaka");

module.exports = {
  config: {
    name: "uptime",
    aliases: ["upt", "up"],
    version: "1.0.0",
    role: 0,
    credits: "MAHABUB",
    description: "Shows bot uptime and status info (image based)",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    try {
      const timeStart = performance.now();

      // CPU usage (optional)
      let usageInfo = null;
      try {
        usageInfo = await pidusage(process.pid);
      } catch (e) {
        console.warn("pidusage failed:", e.message);
      }

      // Time data
      const currentDate = moment().format("DD/MM/YYYY");

      // Uptime
      const uptimeInSeconds = process.uptime();
      const hours = Math.floor(uptimeInSeconds / 3600);
      const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
      const seconds = Math.floor(uptimeInSeconds % 60);
      const formattedUptime = `${hours}h ${minutes}m ${seconds}s`;

      const timeEnd = performance.now();
      const ping = Math.round(timeEnd - timeStart);

      // Fallback plain text
      const fallbackText = `🐥 ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ 🐥
🕒 ᴜᴘᴛɪᴍᴇ : ${hours}ʜ ${minutes}ᴍ ${seconds}ꜱ
📶 ᴘɪɴɢ    : ${ping}ᴍꜱ
📅 ᴅᴀᴛᴇ    : ${currentDate}
👑 ᴏᴡɴᴇʀ   : ᴍᴀʜᴀʙᴜʙ_🦋`;

      const apiUrl = "https://mahabub-bot-uptime.onrender.com/up";

      const messagePayload = { body: fallbackText };

      try {
        const response = await axios.get(apiUrl, {
          responseType: "stream",
          params: {
            name: `${global.GoatBot.config.nickNameBot}`,
            uptime: formattedUptime,
            ping: `${ping}ms`,
            date: currentDate,
            owner: "ᴍᴀʜᴀʙᴜʙ_ʀᴀʜᴍᴀɴ"
          },
          timeout: 10000
        });

        if (response && response.data) {
          messagePayload.attachment = response.data;
        }
      } catch (err) {
        console.warn("🛑 Image generation failed. Fallback to text. Reason:", err.message);
      }

      return api.sendMessage(messagePayload, event.threadID, event.messageID);
    } catch (error) {
      console.error("❌ Uptime command error:", error);
      return api.sendMessage(
        "❌ Failed to generate bot status.",
        event.threadID,
        event.messageID
      );
    }
  }
};
