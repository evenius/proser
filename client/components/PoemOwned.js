const { createElement: h, div, h1, h2, p } = require('preact-hyperscript')

const ThemeSelecter = require('./ThemeSelecter')
const PoemEntryForm = require('./PoemEntryForm')
const LinkCopyButton = require('./LinkCopyButton')

require('./scss/poem.scss')

/**
 * Magically generate a logo
 * @method PoemEditable
 * @return {string} – Returns an editable poem for the user
 */

const PoemOwned = ({title, author, text}) => {
  return div('.poem', [
    h(ThemeSelecter),
    h(PoemEntryForm),
    h(LinkCopyButton)
  ])
}

module.exports = PoemOwned
