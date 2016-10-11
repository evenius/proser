const express = require('express')
const session = require('express-session')

const app = express()
const Router = express.Router()
const { bindRoutes } = require('./routes/routes')

const { connect } = require('./Mongo')
const loadPassport = require('./Auth')

/**
 * Starts the server
 * @function
 * @param {integer} PORT - the port number used by the applicaiton. Should be same as the docker config.
 */
const startServer = function (config) {
  let db = connect(config.database)
  app.locals.db = db

  // Use the embeddedjs view engine
  app.set('view engine', 'ejs')

  // Start your session!
  app.use(session({secret : 'wowzaasd786678bas64genereatedforsure', resave: false, saveUninitialized: false}))

  // Set the passport middleware
  let passport = loadPassport(config)

  app.use(passport.initialize())
  app.use(passport.session())

  // Set the routes
  app.use(bindRoutes(Router, passport))

  // aaand let's go!
  app.listen(config.nodePort, function () {
    console.log(`Proser is now listening on http://localhost:${config.nodePort}`)
  })
}

module.exports = { startServer }
