> const events = require("../lib/utils");
const {
  command,
  isPublic,
  tiny,
  clockString,
  handler
} = require("../lib");
const { FancyRandom, jslbuffer } = require('abu-bot');
const { BOT_INFO } = require("../config");
const { hostname, uptime } = require("os");


const image = "https://i.imgur.com/KPmyzbK.jpeg";
const image_1 = "https://i.imgur.com/KPmyzbK.jpeg";
const audios = "https://i.imgur.com/NzevpfJ.jpeg";

command
	(
		{
			pattern: "mod ?(.*)",
			fromMe: true,
			type: "misc",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['⚘'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu = `_Bot Mode Controling Panel_`;
    return await message.client.sendMessage(message.jid, {
      image: {url: 'https://i.imgur.com/W7nl36S.jpeg'},
     caption: (menu),
      footer: `_Click Here To button Select Your Bot Mode_\n Mode Changing Time : ${time}`,
      buttons: [
        {buttonId: '.setvar MODE: public', buttonText: {displayText: 'Public'}},
      {buttonId: '.setvar MODE: private', buttonText: {displayText: 'Private'}}
    ],
			contextInfo: {
				externalAdReply: {
					title: "𝖠𝖬𝖠𝖱𝖮𝖪 𝖬𝖮𝖣𝖤",
					body: ``,
					mediaType: 1,
					thumbnail: image2,
					mediaUrl: 'https://www.instagram.com/reel/安装它',
					sourceUrl: 'https://github.com/Diegoson/AMAROK-MD',
					showAdAttribution: true
					}
				}
			}, { quoted: message }
		)	
	}
);