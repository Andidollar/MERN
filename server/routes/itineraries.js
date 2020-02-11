const express = require('express')
const router = express.Router()
const itineraryModel = require('../model/itineraryModel')

router.get('/all',
    (req, res) => {
        itineraryModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

   //this is how you implement a city route by specific city
router.get('/:city_id',
(req, res) => {
      let cityRequested = req.params.city_id;
      itineraryModel.find({ city_id: cityRequested })
        .then(itinerary => {
            res.send(itinerary)
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    const newItinerary = new itineraryModel({
        city_id: req.body.city_id,
        title: req.body.title,
        picture: req.body.picture,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hashtags: req.body.hashtags
    })
    newItinerary.save()
      .then(itinerary => {  
      res.send(itinerary)
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});

module.exports = router