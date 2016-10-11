const { h3, nav, ul, li, a, p,  createElement: h } = require('preact-hyperscript')

require('./scss/poemList.scss')

/**
 * Magically generate a logo
 * @method Logo
 * @return {string} – should always be {preact}
 */

const PoemList = ({userPoems}) => {
  let poems = mapTitles(userPoems || [])
  return nav('.poemList', [
    h3('Your works'),
    ul(
      poems.map(poem => li([h(listItem, {poem})]))
    )
  ])
}

const listItem = ({poem}) => a({'href': '/' + poem.slug}, poem.title)

/**
 * Okay, so I feel this needs some explaining:
 * If there's no title on a given work, then we set 'untitled' as the title
 * If theres's more than one untitled work, then we append '#3' or wherever in
 * the order it is
 * @method mapTitles
 * @param  {array}  poems _has_ to be an array of objects, property 'title' is optional
 * @return {array}  return poems with titles
 */
const mapTitles = (poems) => {
  let numTitleLess = poems.reduce((occ, p) => { return occ + !p.title }, 0)
  if(numTitleLess <= 1) {
    // Return a modified version of poems, where any untitled work is titled 'untitled'
    return poems.map(poem => Object.assign(poem, {title: (poem.title || 'Untitled')}))
  }

  var untitledOccurance = 0
  return poems.map(poem => Object.assign(poem, {title: (poem.title || `Untitled #${++untitledOccurance}`)}))
}
// poems.map((poem) => {
//   numTitleLess =
// })

module.exports = PoemList
