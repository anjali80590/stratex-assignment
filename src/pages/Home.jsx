import React from 'react';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 color-red">Movie List</h1>
      <MovieList />
    </div>
  );
};

export default Home;

