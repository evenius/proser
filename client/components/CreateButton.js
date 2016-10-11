const { input } = require('preact-hyperscript')

require('./scss/createbutton.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */
const Logo = () => input('.createbutton', {
  value: 'Create new poem',
  type: 'text'
})

module.exports = Logo
