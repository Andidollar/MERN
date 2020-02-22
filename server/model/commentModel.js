const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    itineraryId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comment', commentsSchema);


