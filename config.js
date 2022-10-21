const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  BRANCH: "main",
  LOGS: toBool(process.env.LOGS) || true,
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE: process.env.ALIVE || "https://i.imgur.com/c9CNgT5.jpeg",
  SESSION_ID:process.env.SESSION_ID || "MWhoSnNSclY=",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? ''𝘈𝘮𝘢𝘳𝘰𝘬,𝘊𝘺𝘣𝘦𝘳𝘹𝘬𝘪𝘥,https://i.imgur.com/c9CNgT5.jpeg',
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[.]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  PACKNAME: process.env.PACKNAME || "𝐀𝐌𝐀𝐑𝐎𝐊",
  AUTHOR: process.env.AUTHOR || "𝐀𝐌𝐀𝐑𝐎𝐊",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || '𝘈𝘮𝘢𝘳𝘰𝘬;𝘊𝘺𝘣𝘦𝘳𝘹𝘬𝘪𝘥;0;https://i.imgur.com/w5wr6c1.jpeg;https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
  SUDO: process.env.SUDO || "27686881509",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  IMAGE_URL: process.env.IMAGE_URL || "https://i.imgur.com/c9CNgT5.jpeg",
  OWNER_NAME: process.env.OWNER_NAME || "𝐂𝐘𝐁𝐄𝐑𝐗𝐊𝐈𝐃",
  BOT_NAME: process.env.BOT_NAME || "𝐀𝐌𝐀𝐑𝐎𝐊",
  MODE: process.env.MODE || "public",
  LANGUAGE: process.env.LANGUAGE || 'english',
};
