const express = require('express')
const app = express()
const port = 3000

const numberOfPictures = 40;

app.get('/', (req, res) => {
    res.send(`<img src="images/fish/${Math.ceil(Math.random() * numberOfPictures)}.jpg" style="width: 90vw;" />`)
})

app.use("/images", express.static(__dirname + '/images'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})