const { div, input, textarea } = require('preact-hyperscript')
const { Component } = require('preact')

const autosize = require('autosize')
// const TextArea = require('preact-textarea-autosize').default


require('./scss/poementryform.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

class PoemEntryForm extends Component {
  componentDidMount () {
    autosize(this._textarea)
  }

  render ({ onInput, poem }) {
    return div('.poemEntry', [
      input({onInput, value: poem.title, placeholder: 'Untitled', name: 'title', type: 'text' }),
      textarea({onInput, value: poem.text, placeholder: 'Enter your thoughts here...', name: 'text', ref: (c) => { this._textarea = c }})
    ])
  }
}

module.exports = PoemEntryForm
