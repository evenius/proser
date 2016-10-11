const { describe, it } = require('mocha')
const { expect, assert } = require('chai')

const render = require('preact-render-to-string')

// const PoemEntryForm = require('../PoemEntryForm')

// This is really screwing me over with preact-compat only working as an alias.
// What I need here is dependency injection for the TextArea-module


describe('PoemEntryForm component', function () {
  describe('rendering', function () {
    it('renders an entry form', function () {

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
