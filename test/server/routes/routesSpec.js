const { describe, it, beforeEach } = require('mocha')
const sinon = require('sinon')
const { should, expect, assert } = require('chai')

const { bindRoutes, getIndex } = require('../../../server/routes/routes')

describe('Router', function () {
  describe('Bind routes', function () {
    var RouterStub, spy

    beforeEach('create simple Router stub', function () {
      spy = sinon.spy()
      RouterStub = { get: spy, post: spy, patch: spy }
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
      expect(res.send.calledOnce).to.equal(true)
    })
  })
})
