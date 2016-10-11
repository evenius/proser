const { combineReducers } = require('redux')

const poem = require('./poem')
const themes = require('./themes')
const user = require('./user')
const auth = require('./auth')

module.exports = combineReducers({poem, themes, user, auth})
