import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Auth from './Routes/Auth';

function App() {
  const [currentUser, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome to Cadillac Jacks Movie Watchlist</h1>
        <Route exact path={'/'}>
          {currentUser ? <Redirect to={'/watch-list'} /> : <Redirect to={'/auth'} />}
        </Route>
        <Route exact path={'/auth'}>
          <Auth setUser={setUser} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
