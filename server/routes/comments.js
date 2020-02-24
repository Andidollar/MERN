const express = require('express')
const router = express.Router()
const commentModel = require('../model/commentModel')
const mongoose = require("mongoose");
// mongoose.set('useFindAndModify', false);

// get all comments
router.get('/all', (req, res) => {
    commentModel
        .find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err))
});

router.post('/add', (req, res) => {
    const newComment = new commentModel({username: req.body.username, comment: req.body.comment, itineraryId: req.body.itineraryId});
    newComment
        .save()
        .then(comment => {
            res.send(comment)
       .push ({itineraryId: req.body.itineraryId})
        })
        .catch(err => {
            res
                .status(400)
                .json({msg: "Unable to save"});
        });
});

// Defined edit route
router.get('/edit/:id', (req, res) => {
    let {id} = req.params;
    commentModel
        .findOne({_id: id})
        .then(response => {
            const commentDetails = Object.assign({}, response._doc);
            res.json(commentDetails);
        })
        .catch(err => res.status(404).json({error: "Comment does not exist!"}));
});

//  Defined update route

router.post('/update/:id', (req, res) => {
    let {id} = req.params;
    commentModel
    .findOne(({_id: id}), function(err, commentModel) {
    if (!commentModel)
      res.status(404).json({msg: "Data not found"});
    else {
        commentModel.comment = req.body.comment
        commentModel.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).json({msg: "Cannot update"});
      });
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', (req, res) => {
    let {id} = req.params;
    commentModel.findOneAndDelete(({_id: id}), function(err, commentModel){
        if(err) res.json(err);
        else res.json('Successfully removed');
    })
    .catch(err => {
        res.status(400).send("cannot delete comment");
  });
});

router.get('/:id', (req, res) => {
    let {id} = req.params;
    commentModel
        .find({itineraryId: id})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err))
});


// Comments businessRoutes = router, let business = commentModel Defined store
// route businessRoutes.route('/add').post(function (req, res) {     let
// business = new Business(req.body);     business.save()       .then(business
// => {         res.status(200).json({'business': 'business in added
// successfully'});       })       .catch(err => {
// res.status(400).send("unable to save to database");       });   });

module.exports = router