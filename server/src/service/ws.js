const twit = require('../twit');

const initialize = (socket) => {
  socket.on('message', data => {
    const msg = JSON.parse(data);
    if (msg && msg.type === 'init') {
      let sinceId = msg.id;
      setInterval(async () => {
        const result = await twit.searchTweets(process.env.SEARCH_QUERY, 100, sinceId);
        if (result.length) {
          sinceId = result[0].id;
          socket.send(JSON.stringify(result));
        }
      }, 60000);
    }
  });
};

module.exports = {
  initialize
};
