import React, { useState } from 'react';
import { myWatchList, updateWatchlist } from '../services/fetch-utils';
import '../Styles/Movie.css';

export default function Movie({ movie, setMovieList, user }) {
  const [onWatchList, setOnWatchList] = useState(false);
  const addToWatchList = async () => {
    const newMovie = {
      name: movie.original_title,
      description: movie.overview,
      api_id: movie.id,
      poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    };

    await updateWatchlist(newMovie);
    const response = await myWatchList(user.currentSession.user.id);
    setMovieList(response);
    setOnWatchList(true);
  };

  return (
    <div onClick={addToWatchList} className={'movie-container'}>
      {onWatchList ? <h3>Selection Has Been Added To Watch List</h3> : null}
      <h2>{movie.original_title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : 'https://www.placebear.com/200/300'
        }
        className="movie-poster"
      />
      <p>{movie.overview}</p>
      <p>{`Release Date: ${movie.release_date}`}</p>
    </div>
  );
}
