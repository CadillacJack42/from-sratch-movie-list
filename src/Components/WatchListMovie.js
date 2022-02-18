import React from 'react';
import { markWatched, myWatchList } from '../services/fetch-utils';
import '../Styles/Movie.css';

export default function WatchListMovie({ movie, setMovieList }) {
  const watchMovie = async () => {
    await markWatched(movie.api_id);
    const response = await myWatchList(movie.user_id);
    await setMovieList(response);
  };

  return (
    <div className={'movie-container'} onClick={watchMovie}>
      {!movie.watched ? (
        <div>
          <p>Have not Watched:</p>
          <p>Click here to mark as watched</p>
        </div>
      ) : (
        <div>
          <p>Movie Has Been Watched:</p>
        </div>
      )}
      <h2>{movie.name}</h2>
      <img src={movie.poster} className="movie-poster" />
      <p>{movie.description}</p>
    </div>
  );
}
