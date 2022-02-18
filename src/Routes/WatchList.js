import React from 'react';
import WatchListMovie from '../Components/WatchListMovie';

export default function WatchList({ movieList, setMovieList }) {
  return (
    <div>
      {movieList.map((movie) => {
        return <WatchListMovie key={movie.id} movie={movie} setMovieList={setMovieList} />;
      })}
    </div>
  );
}
