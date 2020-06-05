const twit = require('./twit');

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    const result = await twit.searchTweets(process.env.SEARCH_QUERY);
    if (result === null) {
      throw new Error('Invalid value');
    }
    reply.view('./server/src/components/htmlShell.art', { headline: process.env.SEARCH_QUERY, tweets: result});
    return reply;
  });
}

module.exports = routes;
