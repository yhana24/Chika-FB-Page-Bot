module.exports = {
  config: {
    name: "welcome",
    description: "Welcome travaler.",
  },
  run: async ({ api, senderId }) => {
    try {
      const userProfile = await api.getUserProfile(senderId);
      const userName = userProfile.first_name;

      const welcomeMessage = `Hello ${userName}! I'm your friendly bot here to assist you. You can ask me about our services or type 'help' to see available commands.`;

      const buttons = [
        {
          type: "postback",
          title: "Help",
          payload: "cmd_help",
        },
      ];

      await api.sendButtonTemplate(senderId, welcomeMessage, buttons);
    } catch (error) {
      console.error("Error in welcome command:", error);
    }
  },
};
