
const Express = require('express')

const { join } = require('path')
const preactRenderToString = require('preact-render-to-string')

/**
 * Route for /, or, you know, index
 * @method getIndex
 * @param  {object} req - the express request object
 * @param  {object} res - the express response object
 */
const getIndex = function (req, res) {
  let { user } = req
  let { Author } = req.app.locals.db

  let render = (err, user) => {
    if(err) { console.log(err) }
    console.log(user)
    let state = {
      auth: {isAuthed: !!user},
      poem: null,
      user
    }

    res.render('app', {
      renderedHtml: preactRenderToString(''),
      state: state
    })
  }

  if (user){
    Author.where({ _id: user._id }).populate('poems').findOne(render)
  } else {
    render()
  }
}

const getPoem = function (req, res) {
  let { user } = req
  let { Poem, Author } = req.app.locals.db

  Poem.where({slug: req.params.slug}).populate('author').findOne((err, poem) => {
    if (err) { console.log(err) }
      let render = (err, author) => {
        if (err) { console.log(err) }
        let state = {
          auth: {isAuthed: !!user},
          poem: {
            title: poem.title,
            text: poem.text,
            slug: poem.slug,
            isOwned: (user ? user._id === poem._id : false),
            author: (poem.author ? poem.author.authorName : '')
          },
          user: author
        }

        res.render('app', {
          renderedHtml: preactRenderToString(''),
          state: state
        })
      }

      if (user){
        Author.where({ _id: user._id }).populate('poems').findOne(render)
      } else {
        render()
      }
    })
}

const patchPoem = function (req, res) {
  let { user } = req
  let { Poem } = req.app.locals.db

  if(!Object.keys(req.body).length) {
    return res.status(500)
  }

  Poem.findOneAndUpdate(
    {slug: req.params.slug},
    {$set: req.body},
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status('error')
      }
      return res.send('ok')
    }
  )
}

const reserveUrl = function (req, res) {
  let { Poem, Author } = req.app.locals.db
  Poem.create({author: req.user}, (err, poem) => {
    if (err) { console.log(err) }
    if(req.user) {
      Author.findOneAndUpdate(
        {_id: req.user._id},
        {$addToSet: {poems: poem}},
        (err) => { console.log(err); res.send({slug: poem.slug}) }
      )
    } else {
      res.send({slug: poem.slug})
    }
  })
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
  Router.get('/reserveUrl', reserveUrl)
  Router.get('/', getIndex)
  Router.get('/:slug', getPoem)
  Router.patch('/:slug', patchPoem)

  return Router
}

module.exports = { bindRoutes, getIndex }
