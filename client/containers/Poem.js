const { a, div, createElement: h } = require('preact-hyperscript')
const { connect } = require('preact-redux')

const StaticPoem = require('../components/PoemStatic')
const PoemOwned = require('../components/PoemOwned')
const PoemList = require('../components/PoemList')

require('./scss/Containers.scss') // Container-sass
console.log(require('react'))

const Poem = ({dispatch, poemId, user}) => {
  var poem = {
    title: 'The burning myre',
    author: 'Jonathan Gill',
    text: 'okay'
  }

  let userPoems = [
    {slug: '2asd'},
    {slug: 'blabla'},
    {title: 'Wowza', slug: 'blabla'},
    {slug: 'blabla'},
    {slug: 'blasd'},
    {slug: 'sdsda'},
    {slug: '2323la'},
    {slug: 'adiuhasiguyd'},
    {slug: 'hoopa'}
  ]

  let PoemToRender = (user || true
    ? h(PoemOwned)
    : h(StaticPoem, poem)
  )
  return div('.container.serene', [h(PoemList, {userPoems}),PoemToRender])
}

module.exports = connect()(Poem)
