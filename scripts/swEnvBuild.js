require('dotenv').config() // make sure you have '.env' file in pwd
const fs = require('fs')

const filtered = Object.keys(process.env)
  .filter(key => key.match(/^(APP_|NODE_ENV).*/))
    .reduce((obj, key) => {
        obj[key] = process.env[key]
        return obj
    }, {})

let conf = `const process = {
  env: ${ JSON.stringify(filtered) } }`

fs.writeFileSync('./public/swenv.js', conf)
