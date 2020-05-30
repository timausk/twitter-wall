import { html } from 'htm/preact';

const Tile = ({ data }) => {
  return html`
    ${data.map(i => html`
      <div class="js-gridItem">
        <div>
          <h3>${i.user_screen_name}</h3>
          <p>${i.tweet_text}</p>
        </div>
      </div>
    `)}
  `;
};

export default Tile;
