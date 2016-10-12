// ./client/lib/AuthService.js
// Stolen straight from documentation @https://auth0.com/docs/quickstart/spa/react/01-login

const Auth0Lock = require ('auth0-lock').default

module.exports = class AuthService {
  constructor (clientId, domain, opts) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, opts)
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication (authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
  }

  login () {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn () {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken (idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken () {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout () {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }
}
