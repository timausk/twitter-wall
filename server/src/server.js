import render from 'preact-render-to-string';
import { html } from 'htm/preact'; // use preact binding
import App from './components/App';

const express = require('express');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(compression());

const body = render(html`
  <h1>Hello from Preact</h1>
  <div id="root">
    <${App} />
  </div>
`);

const layout =`
  <!DOCTYPE html>
  <html lang="en">
    <body>
      ${body}
      <script type="module" src="client.js" async></script>
    </body>
  </html>
`;

app.get('/', (request, response) => {
  response.send(layout);
});

app.get('/client.js', (request, response) => {
  response.sendFile('client.js', {
    root: __dirname, // build folder
  });
});

let server = app.listen(port, () => {
  console.log('Listening on port ' + server.address().port + '...');
});
