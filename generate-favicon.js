const fs = require('fs')
const toIco = require('to-ico')

const files = [
  fs.readFileSync('static/favicon-16.png'),
  fs.readFileSync('static/favicon-24.png'),
  fs.readFileSync('static/favicon-32.png'),
  fs.readFileSync('static/favicon-48.png'),
  fs.readFileSync('static/favicon-64.png'),
  fs.readFileSync('static/favicon-128.png'),
  fs.readFileSync('static/favicon-256.png')
]

toIco(files).then(buf => {
  fs.writeFileSync('static/favicon.ico', buf)
})
