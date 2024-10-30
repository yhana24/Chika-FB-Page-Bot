const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "help",
    description: "Displays command list.",
  },
  run: async ({ api, senderId, args }) => {
    const commandsByCategory = global.bot.commands;

    // Define icons for each category
    const categoryIcons = {
      admin: "💼 *Admin Panel*",
      ai: "🤖 *AI Functions*",
      general: "📁 *General Commands*",
      fun: "🎉 *Fun Commands*",
      info: "ℹ️ *Information*",
    };

    const buttons = [
      {
        type: "web_url",
        title: "Connect Devloper",
        url: "https://tas33n.is-a.dev",
        webview_height_ratio: "full",
      },
      {
        type: "web_url",
        title: "Source Code",
        url: "https://github.com/tas33n/Chika-FB-Page-Bot",
        webview_height_ratio: "full",
      },
    ];

    if (args.length > 0) {
      const commandName = args[0].toLowerCase();
      let foundCommand = null;

      for (const category in commandsByCategory) {
        foundCommand = commandsByCategory[category].find(
          (cmd) => cmd.config.name.toLowerCase() === commandName
        );
        if (foundCommand) break;
      }

      if (foundCommand) {
        const usageText = foundCommand.config.usage
          ? foundCommand.config.usage
              .replace(/<p>/g, global.bot.config.commandPrefix)
              .replace(
                /<pn>/g,
                `${global.bot.config.commandPrefix}${foundCommand.config.name}`
              )
          : "";
        const commandInfo =
          `🔹 **Name:** ${foundCommand.config.name}\n` +
          `📜 **Description:** *${foundCommand.config.description}*\n` +
          `📝 **Usage:** *${usageText}*\n\n` +
          `💡 Use **${global.bot.config.commandPrefix}help** to see all commands.`;

        await api.sendMessage(senderId, commandInfo);
        return;
      } else {
        await api.sendMessage(
          senderId,
          `❌ Command '${commandName}' not found. Use **${global.bot.config.commandPrefix}help** to see all available commands.`
        );
        return;
      }
    }

    let commandList = "";
    let totalCommands = 0;

    for (const category in commandsByCategory) {
      if (commandsByCategory.hasOwnProperty(category)) {
        const categoryTitle =
          categoryIcons[category.toLowerCase()] ||
          `📁 *${
            category.charAt(0).toUpperCase() + category.slice(1)
          } Commands*`;

        commandList += `${categoryTitle}\n━━━━━━━━━━━━━\n`;

        commandsByCategory[category].forEach((cmd) => {
          commandList += `🔹 ${global.bot.config.commandPrefix}${cmd.config.name} - ${cmd.config.description}\n`;
          totalCommands++;
        });
        commandList += "━━━━━━━━━━━━━\n\n";
      }
    }

    commandList += `💡 Use '${global.bot.config.commandPrefix}help <command>' to see more details.\n`;
    commandList += `ℹ️ Bot has **${totalCommands}** commands active.`;

    await api.sendButtonTemplate(senderId, commandList, buttons);
  },
};
