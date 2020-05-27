const twit = require('twit');
require('dotenv').config();

let Twitter = new twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

Twitter.get('search/tweets', {
  q: '#100DaysOfCode',
  count: 10,
  result_type: 'mixed'
}).catch(function (err) {
  console.log('caught error', err.stack);
}).then(function (result) {
  console.log('data', result.data);
});

