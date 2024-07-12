//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "+237698793862";
global.owner = process.env.OWNER_NUMBER || "+24177059320";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40a17aa76eeb59092f77e.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhPVmtvYnVzbHlMYnNNSGczQk51UE9rbk15YVVOcm03ZlM4OUpIcmJWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTR4Z0hNYnBldlhSVG96bWxTRi9lSk5DTUdJK0RmRlZwZm1HbkdKajR4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDU4c3lWV3FsTWx4YVJxakcza0FLYmlxL245ZE9ac2I1MnZJWVBhT25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdUxHWHJJdGlkbVdwMGM5UmMxaWxLak9USldEY1ZJQmtBWTVoUFA1K1ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEeTJKbS9sZHhSY1NKUjZLbW52Tk5QNHlaVVd2YzlMUDZINnlsSTNXMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Ub0VzZkRKams2dWpaOXhUSm51ZGw1Mmx6eTAvdm5lSUtJMTU5b0pCVzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJLVHRudlpLYi9uaEdXbnFocXRxV0RHcS80WGhxMkFZQkJKMkh0U3RGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHdTdkdSU1ZQQjhGV2dhN1lXUGMrUzNZdmpvTllid0kwSzU2dUN0cmFuND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InprZVR4eWthUzNERWlRRWtLYVhpTTZjckZvTVVuU0J4U1lyRlNaaEZjOWdVK3RmaVcxZkdaUXVCTUlmY2dtcWJBZXYwWWo1T28wTThBSVZJYW5MQ0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ik5sM2VZcVFsNEJxY293NzZVUWtBbmJMNlR6ZzFYYW5QQU5Wdk5RZkhubEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijhpd19DdmEwVHJ5a1pkOUwwM05mUFEiLCJwaG9uZUlkIjoiNjIzYWUwNWYtZmFhOS00MDFlLWI5MmYtZGViYjBiNGExYzM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLZVpiZWF3SDc3WkJ2enNtTElrclhXODNFWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVWdPdUU5VFNPZ1VJUnlYVUlvQWIvWS90aUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTJYM1NGRUoiLCJtZSI6eyJpZCI6IjI0MTA3MDU5MzIwOjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bpd2xnRVF6OGpGdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk0b09qdEo5Y1IxaG9jbGFGbkJkZjU2cTJmdjNiSzdya0hsTmViaWVZajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFGTjVvaklYYlRWc05xWnh5ZnNZL0FZVVd1eUNhYklMenNiRmo4NnpTdDErVHEyQldwVVh1WU1SSENyUzhBc0c0bGJLekRjUVhzV2J1Sm5nb21XckFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkOVlsNTlkRjFCazFja0YxMkNlb3ZWb2MwZHU0cDQ1MnNSSEJZeitSMy9qbXA1b20zTzFaT2I2SFNmNXh1MWFRRlpQWHN6WXZSOXh3VjZLU2VEc1FCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA3MDU5MzIwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXVLRG83U2ZYRWRZYUhKV2had1hYK2VxdG43OTJ5dTY1QjVUWG00bm1JKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDgwNDQ0NX0=
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhPVmtvYnVzbHlMYnNNSGczQk51UE9rbk15YVVOcm03ZlM4OUpIcmJWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTR4Z0hNYnBldlhSVG96bWxTRi9lSk5DTUdJK0RmRlZwZm1HbkdKajR4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDU4c3lWV3FsTWx4YVJxakcza0FLYmlxL245ZE9ac2I1MnZJWVBhT25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdUxHWHJJdGlkbVdwMGM5UmMxaWxLak9USldEY1ZJQmtBWTVoUFA1K1ZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEeTJKbS9sZHhSY1NKUjZLbW52Tk5QNHlaVVd2YzlMUDZINnlsSTNXMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Ub0VzZkRKams2dWpaOXhUSm51ZGw1Mmx6eTAvdm5lSUtJMTU5b0pCVzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJLVHRudlpLYi9uaEdXbnFocXRxV0RHcS80WGhxMkFZQkJKMkh0U3RGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHdTdkdSU1ZQQjhGV2dhN1lXUGMrUzNZdmpvTllid0kwSzU2dUN0cmFuND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InprZVR4eWthUzNERWlRRWtLYVhpTTZjckZvTVVuU0J4U1lyRlNaaEZjOWdVK3RmaVcxZkdaUXVCTUlmY2dtcWJBZXYwWWo1T28wTThBSVZJYW5MQ0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ik5sM2VZcVFsNEJxY293NzZVUWtBbmJMNlR6ZzFYYW5QQU5Wdk5RZkhubEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijhpd19DdmEwVHJ5a1pkOUwwM05mUFEiLCJwaG9uZUlkIjoiNjIzYWUwNWYtZmFhOS00MDFlLWI5MmYtZGViYjBiNGExYzM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLZVpiZWF3SDc3WkJ2enNtTElrclhXODNFWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVWdPdUU5VFNPZ1VJUnlYVUlvQWIvWS90aUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTJYM1NGRUoiLCJtZSI6eyJpZCI6IjI0MTA3MDU5MzIwOjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bpd2xnRVF6OGpGdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk0b09qdEo5Y1IxaG9jbGFGbkJkZjU2cTJmdjNiSzdya0hsTmViaWVZajQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFGTjVvaklYYlRWc05xWnh5ZnNZL0FZVVd1eUNhYklMenNiRmo4NnpTdDErVHEyQldwVVh1WU1SSENyUzhBc0c0bGJLekRjUVhzV2J1Sm5nb21XckFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkOVlsNTlkRjFCazFja0YxMkNlb3ZWb2MwZHU0cDQ1MnNSSEJZeitSMy9qbXA1b20zTzFaT2I2SFNmNXh1MWFRRlpQWHN6WXZSOXh3VjZLU2VEc1FCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA3MDU5MzIwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXVLRG83U2ZYRWRZYUhKV2had1hYK2VxdG43OTJ5dTY1QjVUWG00bm1JKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDgwNDQ0NX0=|
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME ||"Ｒ Ｕ Ｇ Ｅ Ｒ  㟼",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
