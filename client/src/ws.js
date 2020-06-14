import render from './render';
import { grid } from './grid.js';

const ws = new WebSocket('ws://localhost:3000/ws');

const getLatestTweetId = () => {
  return grid.dataset.since;
};

ws.onmessage = (message) => {
  render.init(message.data);
};

ws.onopen = function(event) {
  let id = getLatestTweetId();
  ws.send(JSON.stringify({id: id, type: 'init'}));
};
