const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var shortid = require('shortid')

var poemSchema = new Schema({
  title: {type: String},
  author: {type: ObjectId, ref: 'Author'},
  text: {type: String },
  slug: {type: String, required: true, unique: true, 'default': shortid.generate},
  theme: {
    mood: {type: String},
    text: {type: String}
  }

})

module.exports = mongoose.model('Poem', poemSchema)
