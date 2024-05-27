// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    favoriteMovies: [],
  },
  reducers: {
    setMovies(state, action) {
      state.allMovies = action.payload;
    },
    toggleFavorite(state, action) {
      const movie = action.payload;
      const isFavoriteIndex = state.favoriteMovies.findIndex(fav => fav.id === movie.id);
      if (isFavoriteIndex !== -1) {
        // If already favorite, remove from favorites
        state.favoriteMovies.splice(isFavoriteIndex, 1);
      } else {
        // If not favorite, add to favorites
        state.favoriteMovies.push(movie);
      }
    },
  },
});

export const { setMovies, toggleFavorite } = moviesSlice.actions;

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export default store;
