const express = require('express')

const app = express()

// app.get('/questions/:id/:title', (req, res) => {
//   console.log(req.params)
//   res.json(req.params)
// })

app.get('/:op/:a/:b', (req, res) => {
  let a = parseInt(req.params.a)
  let b = parseInt(req.params.b)

  switch (req.params.op) {
    case 'add':
      res.send(`${a + b}`)
      break
    case 'subtract':
      res.send(`${a - b}`)
      break
    case 'multiply':
      res.send(`${a * b}`)
      break
    case 'divide':
      res.send(`${a / b}`)
      break
  }
})

app.listen(3000, () => console.log('http://localhost:3000'))
