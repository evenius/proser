const { describe, it } = require('mocha')
const { expect } = require('chai')

const render = require('preact-render-to-string')

const CreateButton = require('../CreateButton')

describe('CreateButton component', function () {
  it('generates the button for creating a text', function () {
    expect(render(CreateButton())).to.equal(`<input value="Create new poem" type="text" class="createbutton">`)
  })
})
