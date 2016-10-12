const __AUTH0_CLIENT_ID__ = 'xcfICFDNLHJPJ7uQmrtDYEQSado37Um5'
const __AUTH0_CLIENT_SECRET__ = 'LhW3a3HQiZnmnpN2Rc_Bl3mugAumnBP_oogNOBCdRf-KxNIFkX6d3u866hUbTbt6'
const __AUTH0_DOMAIN__ = 'eveniusgill.eu.auth0.com'
const __AUTH0_CALLBACK_URL__ = 'http://localhost:2233/callback'

const AuthService = require('../lib/AuthService')
//
const authService = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, {auth: {redirectUrl: __AUTH0_CALLBACK_URL__}})

const auth = (state, action) => {
  let isAuthed = (state ? state.isAuthed : false)
  return { isAuthed: !!isAuthed || false, service: authService }
}

module.exports = auth
