/*jshint esversion: 6 */
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//load user model
const User = mongoose.model('User');

module.exports = function (passport) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
    },
    (email, password, done) => {
      // console.log(email);
      // console.log(password);

      //Match user
      User.findOne({
        email: email,
      }).then(user => {
        if (!user) {
          return done(null, false, {
            message: 'Utilizador não existente',
          });
        }

        //match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: 'Palavra-chave incorreta',
            });
          }
        });
      });
    }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
