const twit = require('twit');
const defaultAvatarSizes = 'normal';
const availableAvatarSizes = ['mini', 'bigger', 'original'];
const twitterUrl = 'https://twitter.com';


// todo test with missing consiúma key

let Twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

const filterTweets = (tweets) => {
  return tweets.map(tweet => ({
    id: tweet.id_str,
    created_at: formatDate(tweet.created_at),
    user_name: tweet.user.name,
    user_screen_name: tweet.user.screen_name,
    user_profile_url: buildProfileUrl(tweet.user.screen_name),
    user_avatar: process.env.avatar_size
      ? getAlternativeAvatarSize(tweet.user.profile_image_url_https, process.env.avatar_size)
      : tweet.user.profile_image_url_https,
    user_avatar_alt: 'Avatar for ' + tweet.user.screen_name,
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

const searchTweets = async (query = 'porter stout', maxResults = 100, sinceId) => {
  const url = 'search/tweets';
  const params = {q: `${query}`, count: maxResults, since_id: sinceId};
  const result = await Twitter.get(url, params);
  return filterTweets(result.data.statuses);
};

module.exports = {
  searchTweets
};
