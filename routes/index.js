var express = require('express');
var Booking = require('../models').Booking;
var homeaway = require('../utils').homeaway;
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  homeaway.quickSearch(req.body['arrival-city'], 10).then((listings) => {
    console.log(listings.entries);
    res.render('select', {listings: listings.entries});
  });
});

router.post('/payment', function(req, res, next) {
  res.render('payment', {listing_id: req.body.listing_id});
});

router.post('/confirm', function(req, res, next) {
  Booking.create({
    first_name: req.body['first-name'],
    last_name: req.body['last-name'],
    address: req.body['address'],
    city: req.body['city'],
    state: req.body['state'],
    zip: req.body['zip'],
    cc_name: req.body['cc-name'],
    cc_number: req.body['cc-number'],
    cc_exp: req.body['cc-exp'],
    cc_cvv: req.body['cc-cvv']
  }).then(booking => {
    res.render('confirm');
  }).error(err => {
    res.status(405).json('Error has occured');
  });
});

module.exports = router;
