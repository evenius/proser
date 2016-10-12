const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema

var authorSchema = new Schema({
  authId: { type: String, required: true, unique: true},
  authorName: { type: String, required: true},
  poems: [{ type : ObjectId, ref: 'Poem' }],
})
module.exports = mongoose.model('Author', authorSchema);
