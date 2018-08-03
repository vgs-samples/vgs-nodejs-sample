var utils = {}

var HomeAway = require('homeaway');
utils.homeaway = new HomeAway({
    client: process.env.HA_CLIENT,
    secret: process.env.HA_SECRET
});
utils.homeaway.connect();


var stripe = require('stripe')(process.env.STRIPE_TOKEN);
var HttpsProxyAgent = require('https-proxy-agent');
var url = require('url');
var fs = require('fs');
var path = require('path');

// Double check that HTTP_PROXY starts with http:// otherwise there will be ssl errors
var options = url.parse(process.env.HTTP_PROXY);
options.ca = [fs.readFileSync(path.resolve(__dirname, 'cert.pem'))];
var proxy = new HttpsProxyAgent(options);
stripe.setHttpAgent(proxy);

utils.charge_card = (number, exp_month, exp_year, cvc, callback) => {
    stripe.tokens.create({
        card: {
            number: number,
            exp_month: exp_month,
            exp_year: exp_year,
            cvc: cvc
        }
    }, (err, card) => {
        stripe.charges.create({
            amount: 100,
            currency: 'USD',
            source: card.id
        }, callback);
    });
}

module.exports = utils;
  