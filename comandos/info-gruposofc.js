let media = './galería/grupos-oficiales.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝐌𝐈𝐊𝐄𝐑-𝐁𝐎𝐓 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/Ez9Lz8Q4WCpKg3BBcrnUMP

*2._* https://chat.whatsapp.com/FpnkkfyOEwKFLrVRkekCU4

*3._* https://chat.whatsapp.com/D9ztlal0GOG4LbcpS00ehJ

*4._* https://chat.whatsapp.com/KW8t7A6LQfw2K5BFh0ZFid

*5._* https://chat.whatsapp.com/Bs5fNTJTS0X7lF6mpvlqxZ 

*6._* https://chat.whatsapp.com/K0gwYuoWd0A6jwM9CiK9YN

*7._* https://chat.whatsapp.com/IOB712Mxd8YL5j1ROQsnmI
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
