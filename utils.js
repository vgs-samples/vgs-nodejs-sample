var HomeAway = require('homeaway');
var utils = {}

utils.homeaway = new HomeAway({
    client: process.env.HA_CLIENT,
    secret: process.env.HA_SECRET
});

utils.homeaway.connect();

module.exports = utils;
  