var express = require('express');
var Booking = require('../models').Booking;
var router = express.Router();

router.get('/', function(req, res, next) {
  Booking.findAll().then(bookings => {
    res.render('list', {bookings: bookings});
  });
});

router.get('/:id', function(req, res, next) {
  Booking.findById(req.params.id).then(booking => {
    res.render('list', {bookings: [booking], revealed: true});
  });
});

module.exports = router;
