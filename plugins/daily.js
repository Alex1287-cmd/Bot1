let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 5000
    m.reply('+5000 XP sudah di claim coba lagi besok')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 2
  } else m.reply('Anda sudah mengklaim klaim harian hari ini')
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

