const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443

const numberOfPictures = 40;

const server = https.createServer({
  key: fs.readFileSync('secret/privatekey.pem'),
  cert: fs.readFileSync('secret/certificate.pem')
}, app);

app.get('/', (req, res) => {
    res.send(`<img src="images/fish/${Math.ceil(Math.random() * numberOfPictures)}.jpg" style="width: 90vw;" />`)
})

app.use("/images", express.static(__dirname + '/images'))

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})