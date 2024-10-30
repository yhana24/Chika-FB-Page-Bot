/**
 * @author Tas33n
 * ! The source code is written by Tas33n, please don't change the author's name everywhere. Thank you for using
 * ! Official source code: https://github.com/tas33n/Chika-FB-Page-Bot
 * ! If you do not download the source code from the above address, you are using an unknown version and at risk of having your account hacked
 *
 * English:
 * ! Please do not change the below code, it is very important for the project.
 * It is my motivation to maintain and develop the project for free.
 * ! If you change it, you will be banned forever
 * Thank you for using
 */

const { spawn } = require("child_process");
const log = require("./utils/log.js");

async function startProject() {

  const child = spawn("node", ["bot/bot.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
  });

  child.on("close", (code) => {
    if (code == 2) {
      log.info("Restarting Project...");
      startProject();
    }
  });
}

startProject();
