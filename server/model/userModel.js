const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator'); //duplicates omitted

const userSchema = new mongoose.Schema({
    picture: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.plugin(uniqueValidator)

//name if module is the singular of how the database is called
module.exports = mongoose.model("user", userSchema);
