const getIndex = function (req, res) {
  return res.send('OK')
}

function bindRoutes (Router) {
  Router.get('/', getIndex)
  return Router
}

module.exports = { bindRoutes, getIndex }
