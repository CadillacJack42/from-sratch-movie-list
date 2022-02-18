import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Auth from './Routes/Auth';
import WatchList from './Routes/WatchList';
import { logout } from './services/fetch-utils';

function App() {
  const [currentUser, setUser] = useState(localStorage.getItem('supabase.auth.token'));

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
          {currentUser ? <Redirect to={'/watch-list'} /> : <Redirect to={'/auth'} />}
        </Route>
        <Switch>
          <Route exact path={'/auth'}>
            <Auth setUser={setUser} />
          </Route>
          <Route exact path={'/watch-list'}>
            <WatchList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
