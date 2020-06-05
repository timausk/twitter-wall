require('dotenv').config();

const path = require('path');
const app = require('fastify')({logger: true});
const port = process.env.PORT || 3000;

app.register(require('fastify-static'), {
  root: path.join(__dirname, '/../../', 'build'),
  prefix: '/',
});

app.register(require('point-of-view'), {
  engine: {'art-template': require('art-template')}
});

app.register(require('./routes'));

const start = async () => {
  try {
    await app.listen(port);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
/*

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
*/
