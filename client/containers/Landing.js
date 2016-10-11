const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const { createPoem } = require('../actions/actions')

const Logo = require('../components/Logo')
const PoemList = require('../components/PoemList')
const CreateButton = require('../components/CreateButton')

require('./scss/Containers.scss') // Container-sass
require('./scss/landing.scss') // The landing page-sass

const Landing = ({user, auth, dispatch, onClick}) => div('.container.serene', [
  div('.landing', [
    h(Logo),
    h(CreateButton, {onClick}),
    (!user ? '': a({onClick: auth.login},'Sign in to edit your works')
    )
  ])
])

const mapDispatchToProps = (dispatch) => {
  return { onClick () { dispatch(createPoem()) } }
}

module.exports = connect(
  ({ user, auth }) => ({ user, auth }),
  mapDispatchToProps
)(Landing)
