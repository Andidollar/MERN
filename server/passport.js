const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const user = require('./model/userModel')
mongoose.model("user");
const key = require("./keys");
const opts = {};
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   user.findById(id).then((user) => {
//     done(null, user);
//   });
// });

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport.use(
      new GoogleStrategy({
        // options for google strategy
        clientID: key.googleClientID,
        clientSecret: key.googleClientSecret,
        callbackURL: 'http://localhost:3000/cities'
      }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        user.findOne({ googleId: profile.id }).then((currentUser) => {
          console.log('currentUser', currentUser)
          
          if (currentUser) {
            console.warn("hy", currentUser);
            done(null, currentUser);
          } else {
            // if not, create user in our db
            new userModel({
              googleId: profile.id,
              username: profile.displayName,
              oAuth: true,
              email: profile.emails[0].value,
            })
            console.log(newUser)

            newUser
                .save()
                .then(user => {
                    res.send(user)
                })
          }
        });
      })
    );



    module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        user.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

