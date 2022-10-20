const events = require("../lib/event");
const {
  command,
  isPrivate,
  styletext,
  tiny,
  serif_B,
  clockString,
} = require("../lib");
const { OWNER_NAME, BOT_NAME } = require("../config");
const { hostname, uptime } = require("os");
command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Shows list of All commands",
    dontAddCommandList: true,
  },
  async (message,match, { prefix }) => {
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
                
 let menu = `
╭━━〘 `+ styletext(OWNER_NAME.split(' ')[0],58) +` 〙━━──⊷` 
menu+= `
┃ ⛥  *OWNER* :  ${OWNER_NAME}
┃ ⛥  *PREFIX* : ${prefix}
┃ ⛥  *USER* : ${message.pushName}
┃ ⛥  *HOST NAME* :${hostname().split("-")[0]}
┃ ⛥  *DATE* : ${date}
┃ ⛥  *TIME* : ${time}
┃ ⛥  *COMMANDS* : ${events.commands.length} 
┃ ⛥  *UPTIME* : ${clockString(uptime())} 
┃ ⛥  *VERSION* : ${require("../package.json").version}
╰━━━━━━━━━━━──⊷\n
`
menu+= `╭───『 `+ styletext('Commands',57)+`』──◆`
    let cmnd = [];
    let cmd;
    let category = [];
    events.commands.map((command, num) => {
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }

      if (!command.dontAddCommandList && cmd !== undefined) {
        let type;
        if (!command.type) {
          type = "extra";
        } else {
          type = command.type.toLowerCase();
        }

        cmnd.push({ cmd, type: type });

        if (!category.includes(type)) category.push(type);
      }
    });
    cmnd.sort();
    category.sort().forEach((cmmd) => {
     menu+=`
┃ ⿻ ╭─────────────◆
┃ ⿻ │ ⦿---- ${cmmd} ----⦿
┃ ⿻ ╰┬────────────◆
┃ ⿻ ┌┤`
let comad = cmnd.filter(({ type }) => type == cmmd);
      comad.forEach(({ cmd }, num) => {
 menu += `\n┃ ⿻ │ ⛥  ${cmd.trim()}`;
      });
 menu += `\n┃ ⿻ ╰─────────────◆`;
    });

    menu += ` ╰━━━━━━━━━━━──⊷\n`
    menu += `_🐺Send ${prefix}menu <command name> to get detailed information of specific command._\n*📍Eg:* _${prefix}help anime_`;
    return await message.client.sendMessage(message.jid, {
      image: { url: `https://i.imgur.com/9Q0gxqJ.jpeg` },
      caption: menu,
      footer: tiny(
        `Amarok Md\nVersion : ${require("../package.json").version}` ),
      buttons: [
        {
          buttonId: `${prefix}ping`,
          buttonText: { displayText: tiny("⫷ALIVE⫸") },
        },
        {
          buttonId: `${prefix}list`,
          buttonText: { displayText: tiny("⫷LIST⫸") },
        },
      ],
    });
  }
);

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = `╭━━〘 ${tiny(" 𝔸𝕄𝔸ℝ𝕆𝕂 ℂ𝕆𝕄𝕄𝔸ℕ𝔻 𝕃𝕀𝕊𝕋")} 〙━━──⊷ \n`;

    let cmnd = [];
    let cmd, desc;
    events.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }
      if (command.desc) {
        desc = command.desc;
      } else {
        desc = false;
      }
      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `┃ ⛥ │ ➛ ${(num += 1)} *${tiny(cmd.trim())}*\n`;
      if (desc) menu += `┃ ⛥ │ ➛ ${tiny("use : " + desc)}\n`;
    });
    menu += ` ╰━━━━━━━━━━━━━━━━━━━━━━━──⊷`;
   return await message.reply(menu);
  }
);
