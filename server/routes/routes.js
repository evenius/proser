
const Express = require('express')
const { join } = require('path')
const render = require('preact-render-to-string')
// const entry = require('../../client/components/test.js')
const entry = () => ('')

/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  console.log(req.user)
  let fakeState = {
    user: {
      poems: []
    },
    themes: {
      moods: ['serene', 'ocean'],
      fonts: ['serif', 'monotype']
    },
    poem: {
      title: 'Angery',
      author: 'Bloody Jones',
      text: `Hello
      is it
      me
      You're looking for?`,
      mood: 'serene',
      font: 'Garamond'
    }
  }

  res.render('app', {
    renderedHtml: render(entry()),
    state: fakeState
  })
}


reserveUrl = function(req, res) {

}

/**
 * Bind all the above routes, it's not smart, but it's something
 * @method bindRoutes
 * @param  {object}   Router - Provided by Express.js
 * @return {object}            Same router, but now with the bound routes.
 */
function bindRoutes (Router, passport) {
  Router.use('/src', Express.static(join(__dirname, '../../bin'), {maxage: 1}))
  Router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/error' }), (req, res) => { res.redirect(req.session.returnTo || '/') })
  Router.get('/*', getIndex)

  return Router
}

module.exports = { bindRoutes, getIndex }
