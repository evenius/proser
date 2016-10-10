const { createElement: h, div, h1, h2, p } = require('preact-hyperscript')

const nl2br = require('./Nl2br')

require('./scss/poem.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

const PoemStatic = ({title, author, text}) => {
  return div('.poem',[
  h1(title || 'Untitled'),
  h2(author?'By ' + author:''),
  p([h(nl2br, {text})])
])}

module.exports = PoemStatic
