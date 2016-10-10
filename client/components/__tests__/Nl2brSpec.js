const { describe, it } = require('mocha')
const { expect } = require('chai')

const render = require('preact-render-to-string')
const Nl2br = require('../Nl2br')

describe('\n to br Component', function () {
  describe('rendering the new line', function () {
    it('gets prop text with two lines', function () {
      let renderedHtml = render(Nl2br({text: 'wow \n cool'}))
      let numberOfLines = renderedHtml.split('<br>').length
      console.log(renderedHtml, renderedHtml.split('<br>').length);
      expect(numberOfLines).to.equal(2)
    })
    it('gets prop text with one line', function () {
      let renderedHtml = render(Nl2br({text: 'wow cool'}))
      let numberOfLines = renderedHtml.split('<br>').length
      expect(numberOfLines).to.equal(1)
    })
  })
})
