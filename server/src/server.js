import render from 'preact-render-to-string';
import { html } from 'htm/preact'; // use preact binding

const express = require('express');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(compression());

const body = render(html`<h1>Hello from Preact</h1>`);
const layout =`
  <!DOCTYPE html>
  <html lang="en">
    <body>
      ${body}
    </body>
  </html>
`;

app.get('/', (request, response) => {
  response.send(layout);
});

let server = app.listen(port, () => {
  console.log('Listening on port ' + server.address().port + '...');
});
