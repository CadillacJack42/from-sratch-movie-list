import React from 'react';
import '../Styles/Movie.css';

export default function WatchListMovie({ movie }) {
  return (
    <div className={'movie-container'}>
      <h2>{movie.name}</h2>
      <img src={movie.poster} className="movie-poster" />
      <p>{movie.description}</p>
    </div>
  );
}
