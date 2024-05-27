import React from 'react';
import FavoriteMoviesList from '../components/FavoriteMoviesList';

const Favorites = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Favorite Movies</h1>
      <FavoriteMoviesList />
    </div>
  );
};

export default Favorites;
