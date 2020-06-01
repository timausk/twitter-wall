import { html } from 'htm/preact';

const Tweet = ({ data }) => {
  return html`
    ${data.map(i => html`
      <div class="js-gridItem">
        <div class="tweet">
          <a class="tweet__header" href="${i.user_profile_url}" target="_blank">
          <img class="tweet__avatar" src="${i.user_avatar}" alt="${i.user_screen_name}'s Avatar"/>
            <div class="tweet__user">
              <span class="tweet__username">${i.user_name}</span>
              <small class="tweet__screenname">@${i.user_screen_name}</small>
            </div>
          </a>
          <a class="tweet__body" href="${i.tweet_url}" target="_blank">
            <p>${i.tweet_text}</p>
              <div class="tweet__footer">
              <svg class="tweet__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><path d="M14.6 37.4C29.7 37.4 38 25.5 38 15.3v-1c1.6-1.1 3-2.5 4.1-4-1.5.6-3.1 1-4.7 1.2 1.7-1 3-2.5 3.6-4.3-1.6.9-3.3 1.5-5.2 1.9-1.5-1.5-3.6-2.5-6-2.5-4.5 0-8.2 3.5-8.2 7.8 0 .6.1 1.2.2 1.8-6.9-.4-12.9-3.5-17-8.2-.7 1.1-1.1 2.5-1.1 3.9 0 2.7 1.4 5.1 3.7 6.5-1.3 0-2.6-.4-3.7-1v.1c0 3.8 2.8 6.9 6.6 7.6-.7.2-1.4.3-2.2.3-.5 0-1 0-1.5-.1 1 3.1 4.1 5.3 7.7 5.4C11.4 32.8 7.9 34 4 34c-.7 0-1.3 0-2-.1 3.7 2.2 8 3.5 12.6 3.5" fill="#1da1f2"/></svg>
              <small class="tweet__date">${i.created_at}</small>
            </div>
          </a>
        </div>
      </div>
    `)}
  `;
};

export default Tweet;
