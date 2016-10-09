const express = require('express')

const app = express()
const Router = express.Router()
const { bindRoutes } = require('./routes/routes')

/**
 * Starts the server
 * @function
 * @param {integer} PORT - the port number used by the applicaiton. Should be same as the docker config.
 */
const startServer = function (PORT) {
  // Use the embeddedjs view engine
  app.set('view engine', 'ejs')

  // Set the routes
  app.use(bindRoutes(Router))

  // aaand let's go!
  app.listen(PORT, function () {
    console.log(`Proser is now listening on http://localhost:${PORT}`)
  })
}

module.exports = { startServer }
