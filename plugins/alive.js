//copyright ©2022 you may not take this file without giving me and Diego credit 

const {
  command,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");

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
╭━〘 A⋆L⋆I⋆V⋆E⋆ 〙━─⊷` 
alive+= `
┃ ⛥ 𝔹𝕠𝕥-ℕ𝕒𝕞𝕖: ${BOT_NAME}
┃ ⛥ 𝕆𝕨𝕟𝕖𝕣: ${OWNER_NAME}
┃ ⛥ 𝕌𝕤𝕖𝕣: ${message.pushName}
┃ ⛥ ℙ𝕣𝕖𝕗𝕚𝕩: ${prefix} 
┃ ⛥ 𝔻𝕒𝕥𝕖: ${date}
┃ ⛥ 𝕋𝕚𝕞𝕖: ${time}
┃ ⛥ 𝕌𝕡𝕋𝕚𝕞𝕖: ${clockString(uptime())} 
╰━━━━━━━━━━━──⊷\n
`

await message.client.sendMessage(message.jid,{
image: { url: `https://telegra.ph/file/6943d8348ffb35eb3e301.jpg` },
      caption: alive,
      footer: tiny(`alive.js❤️` ),

})
}
)
