const twit = require('twit');
require('dotenv').config();

let Twitter = new twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

function filterTweets (tweets) {
  return tweets.map(tweet => ({
    created_at: formatDate(tweet.created_at),
    user_name: tweet.user.name,
    user_screen_name: tweet.user.screen_name,
    user_avatar: tweet.user.profile_image_url_https,
    tweet_text: tweet.text,
    tweet_retweeted_status_text: tweet.retweeted_status
      ? tweet.retweeted_status.text
      : null,
  }));
}

function formatDate (dateStr) {
  const date = new Date(dateStr);
  const dateTimeFormat = new Intl.DateTimeFormat('en',{year:'numeric',month:'short',day:'2-digit'});
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date );
  return `${day} ${month} ${year}`;
}

export default Object.assign({
  async searchTweets(query, maxResults = 100) {
    const url = 'search/tweets';
    const params = {q: `${query}`, count: maxResults};
    const result = await Twitter.get(url, params);
    //console.log(result.data.statuses);
    return filterTweets(result.data.statuses);
  }
});
