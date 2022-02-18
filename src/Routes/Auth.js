import React, { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function Auth() {
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
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <button onClick={() => setSignIn('in')}>Sign Up</button>
        <button onClick={() => setSignIn('up')}>Sign In</button>
      </form>
    </div>
  );
}
