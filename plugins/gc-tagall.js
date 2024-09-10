let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `➜ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘: ${pesan}`
  let teks = `𓍢ᨳ࣪  𝗠𝗨𝗦𝗔 𝗕𝗢𝗧 𝗟𝗢𝗦 𝗜𝗡𝗩𝗢𝗖𝗔 🧡🐱

* 🛍️ Adquiere el bot con
wa.me/+51944026510\n\n↳ ${oi}\n\n↳ *ETIQUETA:*\n`
  for (let mem of participants) {
  teks += `🧡🐱･ @${mem.id.split('@')[0]}\n`}
  teks += `➜ 𝗠𝗨𝗦𝗔𝗕𝗢𝗧`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler