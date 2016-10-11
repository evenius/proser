const { a } = require('preact-hyperscript')

require('./scss/linkCopyButton.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

const LinkCopyButton = () => a('.linkCopyButton','Copy link')

module.exports = LinkCopyButton
