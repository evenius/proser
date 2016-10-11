require('normalize.css') // Yea, not _not_ using this
require('./app.scss') // app-wide-sass

require('whatwg-fetch') // Polyfill! Pay no attention to the fetch of... fetch

const { render } = require('preact')
const { Router } = require('preact-router')
const { Provider } = require('preact-redux')
const thunk = require('redux-thunk').default
const { createStore, applyMiddleware } = require('redux')
const { createElement: h } = require('preact-hyperscript')

const Poem = require('./containers/Poem')
const Landing = require('./containers/Landing')


const reducers = require('./reducers')
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))
/**
 * Just initialise our app, adding the redux provider, and router
 * @method App
 */
const App = () => (
  h(Provider, { store }, [
    h(Router, [
      h(Landing, {default: true }),
      h(Poem, {path: ':poemId'})
    ])
  ])
)

render(h(App), document.getElementById('content'))
