const { combineReducers } = require('redux')

module.exports = combineReducers({
  data: (state, action) => { return state || [] }
})
