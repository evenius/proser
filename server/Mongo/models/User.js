const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var userSchema = new Schema({
  id: { type: String, required: true},
  author: { type: String, required: true},
  poems: [{ type : ObjectId, ref: 'Poem' }],
})
module.exports = mongoose.model('User', userSchema);
