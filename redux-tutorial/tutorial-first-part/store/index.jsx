import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { addSong, removeSong, addMovie, removeMovie, reset };
