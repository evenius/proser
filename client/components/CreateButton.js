const { input } = require('preact-hyperscript')

require('./scss/createbutton.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */
const Logo = ({onClick}) => input('.createbutton', {
  value: 'Create new poem',
  type: 'text',
  onClick
})

module.exports = Logo
