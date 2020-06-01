const twit = require('twit');
const defaultAvatarSizes = 'normal';
const availableAvatarSizes = ['mini', 'bigger', 'original'];
const twitterUrl = 'https://twitter.com';

require('dotenv').config();

let Twitter = new twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

const filterTweets = (tweets) => {
  return tweets.map(tweet => ({
    created_at: formatDate(tweet.created_at),
    user_name: tweet.user.name,
    user_screen_name: tweet.user.screen_name,
    user_profile_url: buildProfileUrl(tweet.user.screen_name),
    user_avatar: process.env.avatar_size
      ? getAlternativeAvatarSize(tweet.user.profile_image_url_https, process.env.avatar_size)
      : tweet.user.profile_image_url_https,
    tweet_text: tweet.text,
    tweet_url: buildTweetUrl(tweet.user.screen_name, tweet.id_str),
    tweet_retweeted_status_text: tweet.retweeted_status
      ? tweet.retweeted_status.text
      : null,
  }));
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const dateTimeFormat = new Intl.DateTimeFormat('en',{year:'numeric',month:'short',day:'2-digit'});
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date );
  return `${day} ${month} ${year}`;
};

const getAlternativeAvatarSize = (imageUrl, size) => {
  return (size === defaultAvatarSizes || ! availableAvatarSizes.includes(size))
    ? imageUrl
    : imageUrl.replace(defaultAvatarSizes, size);
};

const buildProfileUrl = (screenName) => {
  return `${twitterUrl}/${screenName}`;
};

const buildTweetUrl = (screenName, statusId) => {
  return `${twitterUrl}/${screenName}/status/${statusId}`;
};

export default Object.assign({
  async searchTweets(query, maxResults = 100) {
    const url = 'search/tweets';
    const params = {q: `${query}`, count: maxResults};
    const result = await Twitter.get(url, params);
    return filterTweets(result.data.statuses);
  }
});
