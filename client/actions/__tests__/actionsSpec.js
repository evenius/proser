const { describe, it } = require('mocha')
const sinon = require('sinon')
const { expect } = require('chai')

const { createPoem, copyPoemLink, CREATE_POEM, COPY_POEM_LINK } = require('../actions')

describe('All actions!!', function () {
  describe('CreatePoem', function () {
    it('Returns an object with CREATE_POEM type', function () {
      expect(createPoem()).to.deep.equal({type: CREATE_POEM})
    })
  })
  describe('copyPoemLink', function () {
    it('Returns an object with COPY_POEM_LINK type', function () {
      expect(copyPoemLink()).to.deep.equal({type: COPY_POEM_LINK})
    })
  })
})
