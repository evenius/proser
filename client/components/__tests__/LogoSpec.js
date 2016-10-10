const { describe, it } = require('mocha')
const { expect } = require('chai')

const render = require('preact-render-to-string')

const Logo = require('../Logo')

describe('Logo component', function () {
  it('generates the logo', function () {
    expect(render(Logo())).to.equal(`<h1 class="logo"><span>{</span><span>proser</span><span>}</span></h1`)
  })
})
