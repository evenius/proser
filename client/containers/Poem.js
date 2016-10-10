const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const StaticPoem = require('../components/PoemStatic')
const EditablePoem = require('../components/PoemEditable')

require('./scss/Containers.scss') // Container-sass

const Poem = ({dispatch, poemId, user}) => {
  var text = `wow\n this is \n\n     amazing`

  var poem = {
    title: 'The burning myre',
    author: 'Jonathan Gill',
    text
  }

  let PoemToRender = (user
    ? h(EditablePoem)
    : h(StaticPoem, poem)
  )
  return div('.container.serene', [PoemToRender])
}

module.exports = connect()(Poem)
