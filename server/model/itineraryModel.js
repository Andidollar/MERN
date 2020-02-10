const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    city_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  }
});

//name if module is the singular of how the database is called
module.exports = mongoose.model("itinerary", itinerarySchema);
