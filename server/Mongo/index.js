const mongoose = require('mongoose')

const Poem = require('./models/Poem')
const Author = require('./models/Author')

class Client {
  constructor (databaseUri, models) {
    for (var modelName in models) {
      if (models.hasOwnProperty(modelName)) {
        this[modelName] = models[modelName]
      }
    }
    mongoose.connect(databaseUri)
  }
}

const connect = function (databaseUri) {
  return new Client(databaseUri, {Poem, Author})
}

module.exports = {connect}
