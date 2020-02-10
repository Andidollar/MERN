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

module.exports = router