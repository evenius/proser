const mongoose = require('mongoose')

const Poem = require('./models/Poem')
const User = require('./models/User')

class Client {
  constructor(database_uri, models) {
    for (var modelName in models) {
      if (models.hasOwnProperty(modelName)) {
        this[modelName] = models[modelName]
      }
    }
    mongoose.connect(database_uri)
  }
}

const connect = function (database_uri) {
  return new Client(database_uri, {Poem, User})
}

module.exports = {connect}
