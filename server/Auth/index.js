// All this? Oh, I just found it at https://auth0.com/docs/quickstart/webapp/nodejs/01-login

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

loadPassport = function ({domain, clientID, clientSecret, callbackURL}) {
  let strategy = new Auth0Strategy({
    domain, clientID, clientSecret, callbackURL
  }, function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
    return done(null, profile)
  });

  passport.use(strategy)

  // This can be used to keep a smaller payload
  passport.serializeUser(function (user, done) {
    console.log('serializeUser',user)
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    console.log('deserializeUser',user)
    done(null, user)
  })

  return passport
}

module.exports = loadPassport
