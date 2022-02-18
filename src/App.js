import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Auth from './Routes/Auth';
import Search from './Routes/Search';
import WatchList from './Routes/WatchList';
import { logout, myWatchList } from './services/fetch-utils';

function App() {
  const [currentUser, setUser] = useState(JSON.parse(localStorage.getItem('supabase.auth.token')));
  const [movieList, setMovieList] = useState([]);

  const movieFetch = async () => {
    let response;
    currentUser ? (response = await myWatchList(currentUser.currentSession.user.id)) : null;
    response && (await setMovieList(response));
  };

  useEffect(() => {
    movieFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to Cadillac Jacks Movie Watchlist</h1>
        <div>
          <NavLink to={'/search'}>Search Page</NavLink> {' | '}
          <NavLink to={'/watch-list'}>Watch List</NavLink> {' | '}
          <NavLink onClick={() => logout()} to={'/'}>
            Logout
          </NavLink>
        </div>
        <div className="components">
          <Route exact path={'/'}>
            {currentUser ? <Redirect to={'/search'} /> : <Redirect to={'/auth'} />}
          </Route>
          <Switch>
            <Route exact path={'/auth'}>
              {currentUser ? (
                <Search setMovieList={setMovieList} user={currentUser} />
              ) : (
                <Auth setUser={setUser} />
              )}
            </Route>
            <Route exact path={'/search'}>
              {currentUser ? (
                <Search setMovieList={setMovieList} user={currentUser} />
              ) : (
                <Redirect to={'/auth'} />
              )}
            </Route>
            <Route exact path={'/watch-list'}>
              {currentUser ? (
                <WatchList movieList={movieList} setMovieList={setMovieList} />
              ) : (
                <Redirect to={'/auth'} />
              )}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
