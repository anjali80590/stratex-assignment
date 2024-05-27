
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../store';
import MovieCard from './MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.allMovies);
  const MOVIES_API_URL = process.env.REACT_APP_MOVIES_API_URL || 'https://dummyapi.online/api/movies';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(MOVIES_API_URL);
        dispatch(setMovies(response.data.sort((a, b) => b.rating - a.rating)));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch, MOVIES_API_URL]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
