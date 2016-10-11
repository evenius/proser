const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const Logo = require('../components/Logo')
const CreateButton = require('../components/CreateButton')

require('./scss/Containers.scss') // Container-sass
require('./scss/landing.scss') // The landing page-sass

const Landing = ({dispatch}) => div('.container.serene', [
  div('.landing',[
    h(Logo),
    h(CreateButton),
    a('Sign in to edit your works')
])
])

module.exports = connect()(Landing)
