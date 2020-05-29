import { html } from 'htm/preact';

const Tile = ({ data }) => {
  return html`
    ${data.map(i => html`
      <div>
        ${i.tweet_text}
      </div>
    `)}
  `;
};

export default Tile;
