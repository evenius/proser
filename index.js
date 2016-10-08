const express = require('express')
const app = express()

const { MongoClient } = require('mongodb')

let url = 'mongodb://mongo:27017'

MongoClient.connect(url, (err, conn) => {
  if (err) throw err
  connection = conn
  console.log('connected');
})

app.get('/',function(req,res) {
  res.send('Okay')
})

app.listen(2233, function(){
  console.log('Example app listening on port 2233!')
})
