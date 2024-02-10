global.owner = ['601127905062']  
global.mods = ['601127905062'] 
global.prems = ['601127905062']
global.nameowner = 'Dibzz👾'
global.numberowner = '601127905062' 
global.mail = 'botzlynx@gmail.com' 
global.gc = 'https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD'
global.instagram = 'https://instagram.com/al_aadiyatt07'
global.wm = '© Dibb'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made By'
global.author = 'Adib'
global.autobio = true // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'NjayLynn' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'T9BIMaVN'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
