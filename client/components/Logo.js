const { h1,span } = require('preact-hyperscript')

require('./scss/logo.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

const Logo = () => h1('.logo', [span('{'), span('proser'), span('}')])

module.exports = Logo
