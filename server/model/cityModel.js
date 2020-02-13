const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator') // duplicates omitted


const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //note
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

citySchema.plugin(uniqueValidator)

module.exports = mongoose.model('city', citySchema)