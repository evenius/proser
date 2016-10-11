const { describe, it } = require('mocha')
const { expect, assert } = require('chai')

const render = require('preact-render-to-string')

const LinkCopyButton = require('../LinkCopyButton')

describe('LinkCopyButton component', function () {
  describe('rendering', function () {
    it('renders the button for creating a text', function () {
      expect(render(LinkCopyButton())).to.equal(`<a class="linkCopyButton">Copy link</a>`)
    })
  })
  describe('copying link to clipboard', function () {
    it('copies current url to clipboard', function() {
      //Does not do this yet
      //Also: How?
      assert(false)
    })
  })
})
