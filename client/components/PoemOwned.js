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

const PoemOwned = ({poem, onInput}) => {
  return div('.poem', [
    h(ThemeSelecter, {theme: poem.theme}),
    h(PoemEntryForm, {poem, onInput}),
    h(LinkCopyButton, {slug: poem.slug})
  ])
}

module.exports = PoemOwned
