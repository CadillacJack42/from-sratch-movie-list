import React, { useEffect } from 'react';

export default function WatchList() {
  const netlifyURL = `/.netlify/functions/list`;

  useEffect(() => {
    const response = searchMovies();
    console.log(response);
  }, []);

  const searchMovies = async () => {
    const response = await fetch(netlifyURL);
    const json = await response.json();
    console.log(json);
  };

  return <div></div>;
}
