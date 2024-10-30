const axios = require("axios");

module.exports = {
  config: {
    name: "gpt",
    description: "Interact with GPT-4o",
    usage: "<pn> <text>",
  },
  run: async ({ event, api, senderId, args }) => {
    const prompt = args.join(" ");
    if (!prompt) return api.sendMessage(senderId, "Usage: **/gpt** <question>");

    try {
      const {
        data: { result },
      } = await axios.get(
        `https://joshweb.click/api/gpt-4o?q=${encodeURIComponent(
          prompt
        )}&uid=${senderId}`
      );
      await api.sendMessage(senderId, result);
    } catch {
      await api.sendMessage(
        senderId,
        "There was an error generating the content. Please try again later."
      );
    }
  },
};
