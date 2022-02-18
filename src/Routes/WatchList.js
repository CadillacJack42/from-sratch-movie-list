import React from 'react';
import WatchListMovie from '../Components/WatchListMovie';

export default function WatchList({ movieList }) {
  return (
    <div>
      {movieList.map((movie) => {
        console.log(movie);
        return <WatchListMovie key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
