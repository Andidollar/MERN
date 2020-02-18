const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");
const passport = require("passport");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
//passport middleware
app.use(passport.initialize());
//passport configuration
app.use(passport.session())
require('./passport')(passport)


mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));


