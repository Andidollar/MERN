const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const key = require('../keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// router.get('/all', (req, res) => {
//   userModel
//       .find({})
//       .then(files => {
//           res.send(files)
//       })
//       .catch(err => console.log(err))
// });


router.post("/", (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({msg: "Please do not leave fields empty"});
    }

    userModel
        .findOne({email})
        .then(user => {
            if (!user) 
                return res.status(400).send('Email address does not exist')
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) 
                        return res.status(400).send('Invalid password')
                    
                    const payload = {
                        id: user._id,
                        picture: user.picture,
                        username: user.username
                    };

                    const options = {
                        expiresIn: 2592000
                    };
                    jwt.sign(payload, key.secretOrKey, options, (err, token) => {
                        if (err) {
                            res.json({success: false, token: 'There was an error'});
                        } else {
                            res.json({success: true, token: "bearer " + token});
                        }
                    });
                });
        });
});

router.get("/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      userModel
        .findOne({ _id: req.user._id
            })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  );

  // auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    let user = req.user
    console.log('user :', user);
    const payload = {
        user: {
            id: user.id
        }
    }
    jwt.sign(
        payload,
        keys.secret,
        {
            expiresIn: 2592000
        },
        (err, token) => {
            res.json({
                user,
                success: true,
                token,
            });
        }
    );
    //redirect to front-end
    //res.redirect('/');
});



module.exports = router
