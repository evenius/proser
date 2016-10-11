const { describe, it } = require('mocha')
const { expect, assert } = require('chai')

const render = require('preact-render-to-string')

const PoemStatic = require('../PoemStatic')

describe('PoemStatic component', function () {
  describe('putting together a poem.', function () {
    it('Puts together a poem. Nice.', function () {
      let props = {
        title: 'Cool',
        author: 'Boaty McBoatface',
        text: 'We are halfway theeere'
      }


      expect(render(PoemStatic(props))).to.equal(`<div class="poem"><h1>${props.title}</h1><h2>By ${props.author}</h2><p><span>${props.text}</span></p></div>`)
    })

    it('Puts together a poem with no author.', function () {
      let props = {
        title: 'Cool',
        text: 'We are halfway theeere'
      }

      expect(render(PoemStatic(props))).to.equal(`<div class="poem"><h1>${props.title}</h1><h2>Anonymous</h2><p><span>${props.text}</span></p></div>`)
    })

    it('Puts together a poem with no title.', function () {
      let props = {
        text: 'We are halfway theeere'
      }

      expect(render(PoemStatic(props))).to.equal(`<div class="poem"><h1>${'Untitled'}</h1><h2>${'Anonymous'}</h2><p><span>${props.text}</span></p></div>`)
    })
  })
})
