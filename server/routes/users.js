const express = require('express')
const router = express.Router()
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const passport = require("passport");


// get all users
router.get('/all', (req, res) => {
    userModel
        .find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err))
});

// register user
router.post('/', function (req, res) {
    bcrypt
        .hash(req.body.password, saltRounds, function (err, hash) {
            const newUser = new userModel({
                picture: req.body.picture, username: req.body.username, email: req.body.email, password: hash})

            console.log(newUser)

            newUser
                .save()
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    console.log('err', err.errors.username.kind)
                    if (err.errors.username.kind === "unique") {
                        res
                            .status(500)
                    .send('Username already taken')
                    } else {
                        res
                            .status(500)
                            .send('Internal server error')
                    }
                })
        });
});

// get user by ID
router.get('/id/:id',
    (req, res) => {
        console.log('req :', req);
        const { id } = req.params
        userModel.findOne({ username: id })
            .then(response => {
                const userDetails = Object.assign({}, response._doc);
                delete userDetails.password;
                res.json(userDetails);
            })
            .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
);

// add  itinerary to user favorites
router.post('/addToFavorite',
    (req, res) => {
        userModel.findOne({ _id: req.user.id })
            .then(user => {

                let currentFavItineraries = user.favourites.filter(oneFavItin => oneFavItin.itineraryId === req.body.itineraryId)

                if (currentFavItineraries.length !== 0) {
                    res
                        .status(400)
                        .json({ error: "User already liked this itinerary!" });
                } else {
                    itineraryModel.findOne({ _id: req.body.itineraryId })
                        .then(itinerary => {
                            // console.log(itinerary)
                            user.favourites.push({
                                itineraryId: req.body.itineraryId, //I don't get this!
                                title: itinerary.title,
                                cityId: itinerary.city_id
                            });

                            user
                                .save()
                                .then(userFavItin => res.json(user.favourites))
                                .catch(err => {
                                    res
                                        .status(500)
                                        .json({ error: 'The itinerary could not be saved' })
                                })
                        })
                        .catch(err => {
                            res
                                .status(404)
                                .json({ error: 'Cannot find the itinerary with this id!' })
                        })
                }
            })
            .catch(err => {
                res
                    .status(404)
                    .json({ error: 'User not found' })
            })
    }
);

// remove itinerary from user favorites
router.post('/removeFromFavorite',
    (req, res) => {
        userModel.findOne({ _id: req.user.id })
            .then(user => {

                let currentFavItineraries = user.favourites.filter(oneFavItin =>
                    oneFavItin.itineraryId === req.body.itineraryId)
                if (currentFavItineraries.length === 0) {
                    res
                        .status(400)
                        .json({ error: "User did not like this itinerary!" });
                }
                itineraryModel.findOne({ _id: req.body.itineraryId })
                    .then(itinerary => {
                        const indexItinToRemove = user.favourities.map(oneFavItin =>
                            oneFavItin.itineraryId).indexOf(req.body.itineraryId);
                        console.log(indexItinToRemove)
                        user.favourites.splice(indexItinToRemove, 1);
                        user
                            .save()
                            .then(userFavItin => res.json(user.favourites))
                            .catch(err => {
                                res
                                    .status(500)
                                    .json({ error: 'There was a saving error' })
                            })
                    })
                    .catch(err => {
                        res
                            .status(404)
                            .json({ error: 'Cannot find the itinerary with this id!' })
                    })
            })
            .catch(err => {
                res
                    .status(404)
                    .json({ error: 'User not found' })
            })
    }
);

module.exports = router

//      .then(function(user) {       if (user) {       res.send(user);       }
//   }).catch(err => {         res.status(500).send("Username already taken")})

// router.get("/",
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//       userModel
//         .findOne({ _id: req.user._id
//             })
//         .then(user => {
//           res.json(user);
//         })
//         .catch(err => res.status(404).json({ error: "User does not exist!" }));
//     }
//   );b