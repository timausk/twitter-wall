import { html } from 'htm/preact';

const Tile = ({ data }) => {
  return html`
    <!-- loop over tweets -->
    ${data.map(i => html`
      <div>
        ${i.tweet_text}
      </div>
    `)}
  `;
};

export default Tile;
