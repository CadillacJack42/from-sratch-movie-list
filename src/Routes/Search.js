import React, { useEffect, useState } from 'react';

export default function Search() {
  const netlifyURL = `/.netlify/functions/list`;

  const [query, setQuery] = useState('Avengers');
  // const [queryInput, setQueryInput] = useState('');
  const [results, setResults] = useState('');

  // useEffect(() => {
  //   const response = searchMovies();
  //   console.log(response);
  // }, []);

  // const searchMovies = async () => {
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${netlifyURL}?query=${query}`);
    const json = await response.json();
    console.log(json);
    await setResults(json);
    console.log(results);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input required value={query} onChange={(e) => setQuery(e.target.value)}></input>
          <button>Search</button>
        </label>
      </form>
      {results.results ? (
        <div>
          {results.results.map((result, i) => {
            return <p key={result.overview + i}>{result.overview}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
}
