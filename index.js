const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Okay')
})

app.listen(2233, function () {
  console.log('Example app listening on port 2233!')
})
