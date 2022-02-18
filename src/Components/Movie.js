import React, { useEffect, useState } from 'react';
import '../Styles/Movie.css';

export default function Movie({ movie }) {
  return (
    <div>
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
