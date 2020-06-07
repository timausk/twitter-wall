require('dotenv').config();

const path = require('path');
const app = require('fastify')({logger: true});
const minifier = require('html-minifier');

const port = process.env.PORT || 3000;

app.register(require('fastify-compress'));
app.register(require('fastify-static'), {
  root: path.join(__dirname, '/../../', 'build'),
  prefix: '/',
});
app.register(require('point-of-view'), {
  engine: {'art-template': require('art-template')},
  root: path.join(__dirname, 'components'),
  viewExt: 'art',
  defaultContext: {
    dev: process.env.NODE_ENV === 'development'
  },
  options: {
    useHtmlMinifier: minifier,
    htmlMinifierOptions: {
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    }
  }
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
