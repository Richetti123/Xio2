let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒.𝖉𝖟𝖓🫦 ${pesan}`
let teks = `*🙂‍↕𝙈𝙞𝙘𝙝𝙞𝘽𝙤𝙩 𝙡𝙤𝙨 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙡𝙖𝙣𝙩𝙖𝙨🙂‍↔*\n𝘔𝘪𝘤𝘩𝘪 𝘦𝘭 𝘮𝘦𝘫𝘰𝘳 𝘣𝘰𝘵🥇\n${oi}\n\n*🌤️𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `☀️✨≋ @${mem.id.split('@')[0]}\n`}
teks += `MichiBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
