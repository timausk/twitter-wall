const express = require('express');
const compression = require('compression');

const app = express();
const port = 3000;

app.use(compression());

const layout =`
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <h1>Hello12</h1>
    </body>
  </html>
`;

app.get('/', (request, response) => {
  response.send(layout);
});

let server = app.listen(port, () => {
  console.log('Listening on port ' + server.address().port + '...');
});
