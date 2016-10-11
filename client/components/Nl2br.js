const { span,br } = require('preact-hyperscript')

/**
 * Not the best name, but, new line 2 break
 * @method Nl2b
 * @return {VNode} – containing the text with nice linebreaks
 */

const Nl2br = ({text}) => {
  let lines = text.split('\n')
  // Okay, reduce takes an array of things and returns ONE thing.
  // That thing can be an array
  // So reduce => array will end up with an array
  // So I can efficiently merge in <br/> between all elements

  //This used to be a phat oneliner
  if(lines.length > 1) {
    lines = lines.reduce(function (arr, val) { return arr.concat(val, br()) }, []).slice(0,-1)
    return span(lines)
  }
  return span(text)
}

module.exports = Nl2br
