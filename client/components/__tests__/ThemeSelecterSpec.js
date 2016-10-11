const { describe, it } = require('mocha')
const { expect } = require('chai')

const render = require('preact-render-to-string')

const ThemeSelecter = require('../ThemeSelecter')

describe('ThemeSelecter component', function () {
  describe('rendering', function() {
    it('renders the themeSelecter', function () {
      // expect(render(ThemeSelecter())).to.equal(`<h1 class="logo"><span>{</span><span>proser</span><span>}</span></h1>`)
    })
  })
  describe('changing theme', function () {
    it('dispatches actions when clicked on', function () {
      assert(false)
    })
  })
})
