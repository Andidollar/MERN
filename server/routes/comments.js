const express = require('express')
const router = express.Router()
const commentModel = require('../model/commentModel')

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
    const newComment = new commentModel({username: req.body.username, comment: req.body.comment});
    newComment
        .save()
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res
                .status(400)
                .send("unable to save to database");
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
      res.status(404).send("data is not found");
    else {
        commentModel.comment = req.body.comment
        commentModel.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
router.get('/delete/:id', (req, res) => {
    let {id} = req.params;
    commentModel.findOneAndRemove(({_id: id}), function(err, commentModel){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// Comments businessRoutes = router, let business = commentModel Defined store
// route businessRoutes.route('/add').post(function (req, res) {     let
// business = new Business(req.body);     business.save()       .then(business
// => {         res.status(200).json({'business': 'business in added
// successfully'});       })       .catch(err => {
// res.status(400).send("unable to save to database");       });   });

module.exports = router