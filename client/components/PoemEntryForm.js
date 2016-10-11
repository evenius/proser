const { div, input, createElement: h } = require('preact-hyperscript')
const TextArea = require('react-textarea-autosize').default

require('./scss/poementryform.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

const PoemEntryForm = () => div('.poemEntry',[
  input({type: 'text', value: 'Untitled'}),
  h(TextArea,{placeholder: 'Enter your thoughts here...'},'')
])

module.exports = PoemEntryForm
