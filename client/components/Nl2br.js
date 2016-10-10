const { span,br } = require('preact-hyperscript')

/**
 * Not the best name, but, new line 2 break
 * @method Nl2b
 * @return {string} – should always be {preact}
 */

const Nl2br = ({text}) => {
  let lines = text.split('\n')
  // Okay, reduce takes an array of things and returns ONE thing.
  // That thing can be an array
  // So reduce => array will end up with an array
  // So I can efficiently merge in <br/> between all elements

  return ( text.indexOf('\n') !== -1
    ? span(lines.reduce(function (arr, val) { return arr.concat(val, br()) }, []))
    : span(text)
  )
}

module.exports = Nl2br
