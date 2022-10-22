const {
  command,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");
const { FancyRandom } = require('abu-bot');

const { OWNER_NAME, BOT_NAME } = require("../config");
const { hostname, uptime } = require("os");
command(
  {
    pattern: "arise",
    fromMe: isPrivate,
    desc: "dead",
    dontAddCommandList: true,
  },
async (message,match, { prefix }) => {
	
	let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
let alive = `
╭━━〘 "Hello all systems are functional" 〙━━──⊷` 
alive+= `
┃ ⛥  *BOTNAME* : ${BOT_NAME}
┃ ⛥  *OWNER* :  ${OWNER_NAME}
┃ ⛥  *MY PREFIX* : ${prefix}
┃ ⛥  *CURRENT DATE* : ${date}
┃ ⛥  *TIME* : ${time}
┃ ⛥  *I've been up for* : ${clockString(uptime())} 
╰━━━━━━━━━━━──⊷\n
`

await message.client.sendMessage(message.jid,{
image: { url: `https://i.imgur.com/w5wr6c1.jpeg` },
      caption: FancyRandom(alive),
      footer: tiny(`alive.js❤️` ),
      buttons: [
        {
        buttonId: '${prefix}list',
        buttonText: {displayText: '𝙇𝙄𝙎𝙏'}},
        {
        buttonId: '${prefix}ping',
        buttonText: {displayText: '𝙋𝙄𝙉𝙂'}}
        },
      ],
    });
  }
);
