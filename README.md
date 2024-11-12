<p align="center">
  <img src="https://i.postimg.cc/HnjXPhSr/429544444-122096605454238376-4113409750803799159-n.jpg" width="180" height="180">
  <h1 align="center">Chika FB Page Bot</h1>
</p>

A simple user-friendly Messenger (Business Page) bot based on [fb-graph-api](https://github.com/tas33n/fb-graph-api).

⚠️ **Note: \***Chika Bot**\* is a non-open source project, and this repository is only used to manage requirements and user feedback.**

🚀 **[Try the Chika Bot Here!](https://www.facebook.com/profile.php?id=61557151286096)**

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Key Features](#key-features)
- [Setup](#setup)
- [Commands](#commands)
  - [Admin](#admin)
  - [AI](#ai)
  - [Anime](#anime)
  - [General](#general)
  - [Media](#media)
  - [Utility](#utility)
- [Plugins](#plugins)
- [Support](#support)
- [License](#license)

## Key Features

- Easy-to-use admin panel for managing bot settings
- Customizable commands tailored to your page's needs
- Seamless integration with multiple plugins to extend functionality
- Responsive and fast messaging support for automated responses
- User feedback handling to improve bot interactions
- Simple setup using fb-graph-api for robust performance

## Setup

You need [Node.js](https://nodejs.org/) (>= 18) to run this bot.

1. Obtain **facebook page access token** from [developers.facebook.com](https://developers.facebook.com).
   Follow this [Tutorial](/TUTORIAL.md) to fully understand the setup.
2. Clone this repository or [download zip](https://github.com/tas33n/Chika-FB-Page-Bot/archive/main.zip).
3. Install dependencies via `npm install`.
4. Copy `example.config.json` to `config.json` and edit it.
5. Start the bot via `npm start`.

---

## Commands

### Admin

| Command                                                | Role  | Description           |
| ------------------------------------------------------ | ----- | --------------------- |
| `/shell <code>`                                        | Admin | Run shell code.       |
| `/eval <code>`                                         | Admin | Execute eval code.    |
| `/restart`                                             | Admin | Restart bot system.   |
| `/ban [unban\|check\|total] <userID> [reason] `        | Admin | Ban/unban user.       |
| `/calluser <user_id> <msg>`                            | Admin | Send message to user. |
| `/globaldata <get\|set\|update\|delete> <key> [value]` | Admin | Manage global data.   |

### AI

| Command                                                      | Role     | Description                    |
| ------------------------------------------------------------ | -------- | ------------------------------ |
| `/gemini <text> or <reply to image>`                         | Everyone | Interact with Gemini AI.       |
| `/gpt <text>`                                                | Everyone | Interact with GPT-4o.          |
| `/aiart [style_id                    \| prompt   \| gender]` | Everyone | Generate AI art from an image. |
| `/imagine <text>`                                            | Everyone | Image Generation (FLUX Ai).    |
| `/upscale [2x \| 4x]`                                        | Everyone | Image upscale (default 2x).    |

### Anime

| Command                                          | Role     | Description               |
| ------------------------------------------------ | -------- | ------------------------- |
| `/anime <anime-name>`                            | Everyone | Get anime info.           |
| `/character <character-name or character-index>` | Everyone | Get anime character info. |
| `/manga <manga-name>`                            | Everyone | Get manga info.           |

### General

| Command                | Role     | Description                   |
| ---------------------- | -------- | ----------------------------- |
| `/help`                | Everyone | Displays command list.        |
| `/id`                  | Everyone | Get your ID.                  |
| `/test`                | Everyone | Test command.                 |
| `/welcome`             | Everyone | Welcome traveler.             |
| `/callAdmin <message>` | Everyone | Send a message to bot admins. |

### Media

| Command               | Role     | Description                                     |
| --------------------- | -------- | ----------------------------------------------- |
| `/ytdl <video URL>`   | Everyone | Video Downloader (supports multiple platforms). |
| `/spdl <spotify URL>` | Everyone | Spotify Downloader                              |

### Utility

| Command                                | Role     | Description                    |
| -------------------------------------- | -------- | ------------------------------ |
| `/ocr <reply to image>` \| `<img url>` | Everyone | (OCR) Image to text.           |
| `/pdf <gdrive pdf url>`                | Everyone | Download protected gdrive pdf. |

---

**Last Updated:** November 12, 2024 5:02 PM

_more commands are under development..._

## Plugins

The guard is extensible in form of plugins where custom features and commands can be easily added to it.

See the existing command to learn.

## Support

If you need help with using the Bot or setting it up, join our [Support Chat](https://t.me/misfits_zone).

## License

> Important Note: Under the AGPL-3.0 license, if you're running your own instance, you should add a link to the source [(this repository)](https://github.com/tas33n/Chika-FB-Page-Bot) in your bot's bio. If you're modifying this source and making your own bot, you should link to the source of your own version of the bot according to the AGPL-3.0 license. Check [LICENSE](LICENSE) for more info.

---

`Chika` icon is from pinterest.
