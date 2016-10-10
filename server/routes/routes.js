
const Express = require('express')
const { join } = require('path')
const render = require('preact-render-to-string')
// const entry = require('../../client/components/test.js')
const entry = () => ('wow')


/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  res.render('app', {renderedHtml: render(entry())})
}

/**
 * Bind all the above routes, it's not smart, but it's something
 * @method bindRoutes
 * @param  {object}   Router - Provided by Express.js
 * @return {object}            Same router, but now with the bound routes.
 */
function bindRoutes (Router) {
  Router.use('/src', Express.static(join(__dirname, '../../bin'), {maxage: 1}))
  Router.get('/', getIndex)

  return Router
}

module.exports = { bindRoutes, getIndex }
