const twit = require('./twit');
const ws = require('./service/ws');

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    const result = await twit.searchTweets(process.env.SEARCH_QUERY);
    if (result === null) {
      throw new Error('Invalid value');
    }
    reply.view('htmlShell', { headline: process.env.SEARCH_QUERY, tweets: result, sinceId: result[0].id});
    return reply;
  });

  fastify.get('/ws', { websocket: true }, (connection, req) => {
    ws.initialize(connection.socket);
  });
}

module.exports = routes;
