import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
  };

  console.log(movie);
  return (
    <div className="p-4 border rounded-lg flex flex-col items-start">
      <h3 className="text-xl font-bold mb-2">{movie.movie}</h3>
      <p className="mb-2">
        <strong>Rating:</strong> {movie.rating}
      </p>

      <p className="mb-2">
        <strong>IMDb:</strong>{" "}
        <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
          IMDb Link
        </a>
      </p>

      <button onClick={handleFavoriteClick} className="self-end mt-2">
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
      </button>
    </div>
  );
};

export default MovieCard;
