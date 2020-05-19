const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let count = 0
let foods = ['pizza', 'hotdog']

app.get('/foods', (req, res) => {
  res.json({ foods })
})

app.post('/foods', (req, res) => {
  foods.push(req.body.food)
  res.json({ foods })
})

app.get('/increment', (req, res) => {

  count++

  res.json({
    count
  })
})

app.get('/decrement', (req, res) => {

  count--

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
