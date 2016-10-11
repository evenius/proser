const { describe, it, beforeEach } = require('mocha')
const { expect } = require('chai')
const sinon = require('sinon')

const { bindRoutes, getIndex } = require('../routes')

describe('Router', function () {
  describe('binding', function () {
    var RouterStub, spy

    beforeEach('create simple Router stub', function () {
      spy = sinon.spy()
      RouterStub = { get: spy, post: spy, patch: spy, use: spy }
    })

    it('should bind like... 5 routes', function () {
      bindRoutes(RouterStub)
      expect(spy.called).to.equal(true)
    })

    it('should return the same Router', function () {
      expect(bindRoutes(RouterStub)).to.equal(RouterStub)
    })
  })

  describe('GET /', function () {
    it('should call res.render', function () {
      let req, res
      req = res = {}
      res.render = sinon.spy()

      getIndex(req, res)
      expect(res.render.calledOnce).to.equal(true)
    })
  })
})
