import render from './render';

const ws = new WebSocket('ws://localhost:3000/ws');

const getLatestTweetId = () => {
  return document.getElementById('js-grid').dataset.since;
};

ws.onmessage = (message) => {
  render.init(message.data);
};

ws.onopen = function(event) {
  let id = getLatestTweetId();
  ws.send(JSON.stringify({id: id, type: 'init'}));
};
