import React from 'react';
import WatchListMovie from '../Components/WatchListMovie';
import { clearWatchList } from '../services/fetch-utils';

export default function WatchList({ movieList, setMovieList, currentUser, movieFetch }) {
  const clearList = async () => {
    await clearWatchList(currentUser.currentSession.user.id);
    await movieFetch();
  };
  return (
    <div>
      <button onClick={() => clearList()}>Clear Watch List</button>
      {movieList.map((movie) => {
        return <WatchListMovie key={movie.id} movie={movie} setMovieList={setMovieList} />;
      })}
    </div>
  );
}
