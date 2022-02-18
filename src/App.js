import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Auth from './Routes/Auth';
import Search from './Routes/Search';
import WatchList from './Routes/Search';
import { logout, myWatchList } from './services/fetch-utils';

function App() {
  const [currentUser, setUser] = useState(JSON.parse(localStorage.getItem('supabase.auth.token')));
  const [movieList, setMovieList] = useState([]);

  const movieFetch = async () => {
    const response = await myWatchList(currentUser.currentSession.user.id);
    response && (await setMovieList(response));
  };

  useEffect(() => {
    movieFetch();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to Cadillac Jacks Movie Watchlist</h1>
        <NavLink to={'/search'}>Search Page</NavLink> {' | '}
        <NavLink to={'/watch-list'}>Watch List</NavLink> {' | '}
        <NavLink onClick={() => logout()} to={'/'}>
          Logout
        </NavLink>
        <Route exact path={'/'}>
          {currentUser ? <Redirect to={'/search'} /> : <Redirect to={'/auth'} />}
        </Route>
        <Switch>
          <Route exact path={'/auth'}>
            <Auth setUser={setUser} />
          </Route>
          <Route exact path={'/search'}>
            {currentUser ? <Search movieList={movieList} /> : <Redirect to={'/auth'} />}
          </Route>
          <Route exact path={'/watch-list'}>
            {currentUser ? <WatchList movieList={movieList} /> : <Redirect to={'/auth'} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
