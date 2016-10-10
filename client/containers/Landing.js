const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const Logo = require('../components/Logo')
const CreateButton = require('../components/CreateButton')

require('./scss/Containers.scss') // Container-sass

const Landing = ({dispatch}) => div('.container.serene', [
  h(Logo),
  h(CreateButton),
  a('Sign in to edit your works')
])

module.exports = connect()(Landing)
