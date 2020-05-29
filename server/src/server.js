import render from 'preact-render-to-string';
import { html } from 'htm/preact';
import Twit from './twit';
import App from './components/App';

const express = require('express');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(compression());

const initialSearchQuery = process.env.initial_search_query;

const HTMLShell = (body, headline) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <title>Twitter Demo wall</title>
        <link rel="stylesheet" href="main.css" >
    </head>
    <body>
      <h1>#${headline}</h1>
      ${body}
      <script type="module" src="client.js" async></script>
    </body>
  </html>
`;

Twit.searchTweets(initialSearchQuery, 4)
  .then((tweets) => {
    const body = render(html`
    <div id="root">
      <${App} data=${tweets} />
    </div>
  `);
    app.get('/', (req, res) => res.send(HTMLShell(body, initialSearchQuery)));
  })
  .catch((error) => {
    app.get('/', (req, res) => res.send(HTMLShell('sorry something went wrong: ' + error, initialSearchQuery)));
  });

app.get('/client.js', (request, response) => {
  response.sendFile('client.js', {
    root: __dirname, // build folder
  });
});
app.get('/main.css', (request, response) => {
  response.sendFile('main.css', {
    root: __dirname,
  });
});
let server = app.listen(port, () => {
  console.log('Listening on port ' + server.address().port + '...');
});
