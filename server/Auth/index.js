// All this? Oh, I just found it at https://auth0.com/docs/quickstart/webapp/nodejs/01-login

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const loadPassport = function ({domain, clientID, clientSecret, callbackURL}, db) {
  let strategy = new Auth0Strategy({
    domain, clientID, clientSecret, callbackURL
  }, function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
    return done(null, profile)
  })

  //I call my users 'Authors' coz they're artists
  let { Author } = db

  passport.use(strategy)

  // This can be used to keep a smaller payload
  passport.serializeUser(function (user, done) {
    // Why always update? Sometimes displayName changes, and then the system will
    // catch that like no one even knew.
    Author.findOneAndUpdate(
      {authId: user.id},
      {$set: {authId: user.id, authorName: user.displayName}},
      {upsert: true, new: true},
      done
    )
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  return passport
}

module.exports = loadPassport
