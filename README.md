<p align="center">
  <img src="https://i.postimg.cc/HnjXPhSr/429544444-122096605454238376-4113409750803799159-n.jpg" width="180" height="180">
  <h1 align="center">Chika FB Page Bot</h1>
</p>

A simple user-friendly Messenger (Business Page) bot based on [fb-graph-api](https://github.com/tas33n/fb-graph-api).

⚠️ **Note: ***Chika Bot*** is a non-open source project, and this repository is only used to manage requirements and user feedback.**

🚀 **[Try the Chika Bot Here!](https://www.facebook.com/profile.php?id=61557151286096)**

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Key Features](#key-features)
- [Setup](#setup)
- [Commands](#commands)
- [Plugins](#plugins)
- [Support](#support)
- [License](#license)

## Key Features
* Easy-to-use admin panel for managing bot settings
* Customizable commands tailored to your page's needs
* Seamless integration with multiple plugins to extend functionality
* Responsive and fast messaging support for automated responses
* User feedback handling to improve bot interactions
* Simple setup using fb-graph-api for robust performance


## Setup
You need [Node.js](https://nodejs.org/) (>= 18) to run this bot.

1. Obtain **facebook page access token** from [developers.facebook.com](https://developers.facebook.com).
Follow this [Tutorial](/TUTORIAL.md) to fully understand the setup.
2. Clone this repository or [download zip](https://github.com/tas33n/Chika-FB-Page-Bot/archive/main.zip).
3. Install dependencies via `npm install`.
4. Copy `example.config.json` to `config.json` and edit it.
5. Start the bot via `npm start`.


Here’s the README format for your commands, organized by category with roles and descriptions:

---

## Commands

### Admin
Command                  | Role   | Available at | Description
------------------------ | ------ | ------------ | -------------------------------
`/shell <code>`          | Admin  | In-Bot       | Run shell code.
`/eval <code>`           | Admin  | In-Bot       | Excute eval code.
`/restart`               | Admin  | In-Bot       | Restart bot system.

### AI
Command                  | Role   | Available at | Description
------------------------ | ------ | ------------ | -------------------------------
`/gemini <text>` \| `<reply to image>` | Everyone | In-Bot       | Interact with Gemini AI.
`/gpt <text>`            | Everyone | In-Bot       | Interact with GPT-4o.

### General
Command                  | Role   | Available at | Description
------------------------ | ------ | ------------ | -------------------------------
`/help`                  | Everyone | In-Bot       | Displays command list.
`/id`                    | Everyone | In-Bot       | Get your ID.
`/test`                  | Everyone | In-Bot       | Test command.
`/welcome`               | Everyone | In-Bot       | Welcome traveler.

--- 

more commands are under development...

## Plugins

The guard is extensible in form of plugins where custom features and commands can be easily added to it.

See the existing command to learn.

## Support

If you need help with using the Bot or setting it up, join our [Support Chat](https://t.me/misfits_zone).


## License

> Important Note: Under the AGPL-3.0 license, if you're running your own instance, you should add a link to the source [(this repository)](https://github.com/tas33n/Chika-FB-Page-Bot) in your bot's bio. If you're modifying this source and making your own bot, you should link to the source of your own version of the bot according to the AGPL-3.0 license. Check [LICENSE](LICENSE) for more info.

---

`Chika` icon is from pinterest.
