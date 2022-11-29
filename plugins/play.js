const {command , isPrivate } = require("../lib/");
const yts = require("yt-search");

command(
{
pattern : "play",
fromMe: isPrivate,
desc : "yts player",
type : "music",
 },
 
 async (message, match) => {
 	if(!match) return await message.reply("_enter the song name_");
 const videos = await yts(match);
    let  text = `
╭━━〘  𝗔𝗠𝗔𝗥𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥  〙━━──⊷
┃ 
┠ 𖠢Title : ${videos.all[0].title}
┠ 𖠢Publish : ${videos.all[0].ago}
┠ 𖠢Channel : ${videos.all[0].author.name}
┃ 𖠢Viwes : ${videos.all[0].viwes}
╰━━━━━━━━━━━──⊷`

const buttons = [
  {buttonId: `.song ${videos.all[0].url}`, buttonText: {displayText: 'DOWNLOAD'}, type: 1},
  {buttonld: `.vidoe ${videos.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
];

const buttonMessage = {
    image : {url: `${videos.all[0].image}`},
    caption: text,
    footer : "𝗔𝗠𝗔𝗥𝗢𝗞",
    buttons:buttons,
    headerType: 1
}

return await message.client.sendMessage(message.jid, buttonMessage);

  })
