const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var poemSchema = new Schema({
  title: {type: String},
  author: {type: ObjectId, ref: 'User'},
  text: {type: String, required: true},
  slug: {type: String, required: true},
  theme: {
    mood: {type: String},
    text: {type: String}
  }

})

module.exports = mongoose.model('Poem', poemSchema)
