const express = require('express')

const app = express()
const Router = express.Router()
const { bindRoutes } = require('./routes/routes')

const startServer = function (PORT) {
  app.use(bindRoutes(Router))
  app.listen(PORT, function () {
    console.log(`proser listening on port ${PORT}!`)
  })
}

module.exports = { startServer }
