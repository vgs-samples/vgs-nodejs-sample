<p align="center"><a href="https://www.verygoodsecurity.com/"><img src="https://avatars0.githubusercontent.com/u/17788525" width="128" alt="VGS Logo"></a></p>
<p align="center"><b>vgs-nodejs-sample</b></p>
<p align="center"><i>Integration of node.js app with VGS</i></p>

## Requirements
- VGS [account](https://dashboard.verygoodsecurity.com/)
- Stripe [account](https://dashboard.stripe.com/register)
- HomeAway [account](https://www.homeaway.com/platform/lead-form)
- [ngrok](https://ngrok.com/)

## Third-party services
1. Create account on Stripe
2. Generate Stripe sandbox API key
3. Create account on HomeAway
4. Get your HomeAway client_id and secret

## VGS base setup
1. Go to [VGS-Dashboard](https://dashboard.verygoodsecurity.com), create a new organization, create a new vault.
2. Select your vault, go to `Integration` page
3. Copy your proxy URL, it should be in format:
```
http://<user>:<password>@<tenant>.SANDBOX.verygoodproxy.com:8080
```
* TODO: note about `http://`
* TODO: note about cert

## Run application
1. Clone repository and go to app folder
2. Install all dependecies `npm install`
3. Run the app `HA_CLIENT='<client_id>' HA_SECRET='<secret_key>' STRIPE_TOKEN='<token>' HTTP_PROXY='<proxy_url>' npm start`
4. Run ngrok, copy provided address

## Secure inbound traffic with VGS
<img src="https://github.com/verygoodsecurity/vgs-nodejs-sample/raw/master/images/redaction.gif">

1. Go to VGS dashboard
2. Got to `Secure traffic` -> `Inbound`
3. Put ngrok url to upstream
4. Apllication should be availiable by `https://<tenant>.sandbox.verygoodproxy.com/`
6. Fill forms in app, submit payment data
7. Open VGS dashboard, go to `Logs`
8. Find the request with payment data, click on it
9. Click on `Secure this payload`
10. Select fields, click `Secure`
11. Done, you inbound secure route has been created

## Setup self-revealing
1. TODO

## Secure outbound traffic to Stripe
1. TODO