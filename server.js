const express = require('express')

const app = express()

app.get('/questions/:id/:title', (req, res) => {
  console.log(req.params)
  res.json(req.params)
})


app.listen(3000, () => console.log('http://localhost:3000'))
