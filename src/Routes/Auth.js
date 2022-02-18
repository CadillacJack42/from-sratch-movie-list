import React, { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function Auth({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInOrUp, setSignIn] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setSignIn('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInOrUp === 'in' ? await signIn(email, password) : await signUp(email, password);
    setUser(JSON.parse(localStorage.getItem('supabase.auth.token')));
    resetForm();
    // location.replace('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Password:
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <button onClick={() => setSignIn('up')}>Sign Up</button>
        <button onClick={() => setSignIn('in')}>Sign In</button>
      </form>
    </div>
  );
}
