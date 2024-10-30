<p align="center">
  <img src="https://i.postimg.cc/9f1Tp2Wd/logo.jpg" width="180" height="180">
  <h1 align="center">Freia FB Page Bot</h1>
</p>

A simple user-friendly Messenger (Buisness Page) bot based on [fb-graph-api](https://github.com/tas33n/fb-graph-api)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Key Features](#key-features)
- [Setup](#setup)
- [Commands](#commands)
- [Plugins](#plugins)
- [Support](#support)
- [License](#license)

## Key Features
* Adding admins to the bot
* Ability to create custom commands
* Supports plugins


## Setup
You need [Node.js](https://nodejs.org/) (>= 18) to run this bot.

1. Obtain **facebook page access token** from [developers.facebook.com](https://developers.facebook.com).
Follow this [Tutorial](/TUTORIAL.md) to fully understand the setup.
2. Clone this repository or [download zip](https://github.com/tas33n/freia-bot-gramjs/archive/main.zip).
3. Install dependencies via `npm install`.
4. Copy `example.config.json` to `config.json` and edit it.
5. Start the bot via `npm start`.


## Commands
Command                 | Role       | Available at | Description
----------------------- | ---------- | ------------ | -----------------
`/help` \| `/start`     | _Everyone_ | _In-Bot_     | How to use the bot.

All commands and actions are synchronized across all of the groups managed by the owner and they work with **replying**, **mentioning** or **ID** of a user.

If used by reply, `/ban` and `/warn` would remove the replied-to message.

## Plugins

The guard is extensible in form of plugins where custom features and commands can be easily added to it.

See the existing command to learn.

## Support

If you need help with using the Bot or setting it up, join our [Support Chat](https://t.me/misfits_zone).


## License

> Important Note: Under the AGPL-3.0 license, if you're running your own instance, you should add a link to the source [(this repository)](https://github.com/tas33n/freia-bot-gramjs) in your bot's bio. If you're modifying this source and making your own bot, you should link to the source of your own version of the bot according to the AGPL-3.0 license. Check [LICENSE](LICENSE) for more info.

---

`Freia` icon is from pinterest.
