let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai Kntol ${ye} 
`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
