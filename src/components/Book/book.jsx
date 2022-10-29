
import React from 'react';
import useFetch from 'react-hook-usefetch';

export default () => {
  const { data, loading, error } = useFetch('https://fudap-books-api.herokuapp.com/books/', {});

  const getData = () => {
    if (error.status) return <li><p>Error: {error.message}</p></li>;
    if (loading) return <li><p>Loading...</p></li>;
    if (data.results) return data.results.map((poke, i) => <li key={`poke-${i}`}><p>{poke.name}</p></li>);
  }

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {getData()}
      </ul>
    </div>
  );

}
