import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);
  console.log(favoriteMovies);

  return (
    <div className="p-4 relative" style={{ minHeight: "80vh" }}> 
      {favoriteMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2"> 
          <p className="text-center">No favorite movies selected <br/> Please select your favorite movies.</p>
        </div>
      )}
    </div>
  );
};

export default FavoriteMoviesList;

