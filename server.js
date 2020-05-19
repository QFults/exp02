const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))

let count = 0

app.get('/increment', (req, res) => {

  count++

  res.json({
    count
  })
})

app.get('/count', (req, res) => {
  res.json({
    count
  })
})

app.listen(3000, () => console.log('http://localhost:3000'))
