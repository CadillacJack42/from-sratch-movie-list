import React, { useEffect, useState } from 'react';
import { updateWatchlist } from '../services/fetch-utils';
import '../Styles/Movie.css';

export default function Movie({ movie, setMovieList }) {
  console.log(movie);
  const addToWatchList = async () => {
    const newMovie = {
      name: movie.original_title,
      description: movie.overview,
      api_id: movie.id,
      poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    };

    const response = await updateWatchlist(newMovie);
    await setMovieList(response);
    location.replace('/watch-list');
  };

  return (
    <div onClick={addToWatchList} className={'movie-container'}>
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
