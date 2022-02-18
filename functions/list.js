const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  const movieDBURL = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.MOVIE_API_KEY}&include_adult=false&query='infinity'`;

  try {
    const response = await fetch(movieDBURL);
    const json = await response.json();
    console.log(json);
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching movies' }),
    };
  }
};
