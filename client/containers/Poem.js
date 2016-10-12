const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const StaticPoem = require('../components/PoemStatic')
const PoemOwned = require('../components/PoemOwned')
const PoemList = require('../components/PoemList')

const { patchPoem } = require('../actions/actions')

require('./scss/Containers.scss') // Container-sass

const Poem = ({auth, user, poem, onInput}) => {
  if (auth.isAuthed) {
    return div('.container.serene', [h(PoemList, {userPoems: user.poems}), h(PoemOwned, {poem, onInput})])
  } else {
    return div('.container.serene', [h(StaticPoem, {poem})])
  }
}

const mapDispatchToProps = (dispatch, { poemId }) => {
  return {
    onInput: ((poem) => {
      return (e) => {
        let delta = {}
        delta[e.target.name] = e.target.value
        dispatch(patchPoem(poem, delta))
      }
    })(poemId)
  }
}

module.exports = connect(
  ({ user, auth, poem }) => ({ user, auth, poem }),
  mapDispatchToProps
)(Poem)
