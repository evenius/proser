const { div,span,p, createElement: h } = require('preact-hyperscript')

require('./scss/themeselecter.scss')

/**
 * Magically generate a logo
 * @method ThemeSelecter
 * @return {string} – should always be {preact}
 */

const ThemeSelecter = () => div('.themeSelecter', [
  h(ThemePreviewer, {circle: h(MoodSelector), 'label': 'Set mood'}),
  h(ThemePreviewer, {circle: 'Tt', 'label': 'Set text'})
])

const MoodSelector = () => div('.mood')

const ThemePreviewer = ({circle, label}) => (
  span('.previewer',[
    span('.circle', [circle]),
    p(label)
  ])
)

module.exports = ThemeSelecter
