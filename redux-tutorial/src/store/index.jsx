import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      return state.filter((song) => song.id !== action.payload.id);
    },
    resetSongPlaylist(state, action) {
      return [];
    },
  },
});
export const { addSong, removeSong, resetSongPlaylist } = songsSlice.actions;

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
    resetMoviePlaylist(state, action) {
      return [];
    },
  },
});
export const { addMovie, removeMovie, resetMoviePlaylist } = moviesSlice.actions;

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});
export { store };
