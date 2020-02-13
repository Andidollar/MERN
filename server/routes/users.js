const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/all',
    (req, res) => {
        userModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

    // router.post('/', (req, res) => {
    //     const newUser = new userModel({
    //         picture: req.body.picture,
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     newUser.save()
    //       .then(user => {  
    //       res.send(user)
    //       })
    //       .catch(err => {
    //           console.log('err', err.errors.username.kind)
              
    //           if(err.errors.username.kind === "unique"){
    //             res.status(500).send('Username already taken') 
    //           }else {
    //             res.status(500).send("Internal server error") 
    //           }
    //         })
          
    // });

    router.post('/', function (req, res) {
        bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
            const newUser = new userModel({
        picture: req.body.picture,
        username: req.body.username,
         email: req.body.email,
         password: hash
         })
         
         console.log(newUser)

         newUser.save()
          .then(user => {  
          res.send(user)
          })
          .catch(err => {
              console.log('err', err.errors.username.kind)
              
              if(err.errors.username.kind === "unique"){
                res.status(500).send('Username already taken') 
              }else {
                res.status(500).send("Internal server error") 
              }
            })
        });
      });

    module.exports = router

    //      .then(function(user) {
    //       if (user) {
    //       res.send(user);
    //       }
    //     }).catch(err => {
    //         res.status(500).send("Username already taken")}) 