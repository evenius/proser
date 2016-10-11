const { describe, it } = require('mocha')
const { expect, assert } = require('chai')

const render = require('preact-render-to-string')

const PoemList = require('../PoemList')

describe('PoemList component', function () {
  describe('rendering, with {userPoems}-prop', function () {

    let userPoem = {
      title: 'foo',
      slug: 'bar'
    }

    it('renders a list with no {userPoems}', function () {
      let userPoems = []

      expect(render(PoemList({userPoems}))).to.equal(`<nav class="poemList"><h3>Your works</h3><ul></ul></nav>`)
    })

    it('renders a list with one {userPoems}', function () {
      let userPoems = [userPoem]

      expect(render(PoemList({userPoems}))).to.equal(`<nav class="poemList"><h3>Your works</h3><ul><li><a href="/bar">foo</a></li></ul></nav>`)
    })
    it('renders a list with two {userPoems}', function () {
      let userPoems = [userPoem, userPoem]

      expect(render(PoemList({userPoems}))).to.equal(`<nav class="poemList"><h3>Your works</h3><ul><li><a href="/bar">foo</a></li><li><a href="/bar">foo</a></li></ul></nav>`)
    })
  })
  describe('filling it out', function () {
    it('calls appropriate title setter when title is typed into', function () {
      assert(false)
    })
    it('calls appropriate textbody setter, when body is being changed', function () {
      assert(false)
    })
  });
})
