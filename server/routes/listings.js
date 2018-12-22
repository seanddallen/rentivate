const express = require('express')
const router = express.Router();
const Listing = require('../models/listing')


router.get('', function(req, res){
  Listing.find({}, function(err, results){
    res.json(results)
  })
})

router.get('/:id', function(req, res){
  const rentalId = req.params.id

  Rental.find({}, function(err, results){
    res.json(results)
  })
})

module.exports = router;
