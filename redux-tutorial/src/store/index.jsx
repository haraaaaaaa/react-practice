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
  },
  extraReducers(builder) {
    builder.addCase(moviesSlice.actions.reset, (state, action) => {
      return [];
    });
  },
});
export const { addSong, removeSong } = songsSlice.actions;

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
    reset(state, action) {
      return [];
    },
  },
});
export const { addMovie, removeMovie, reset } = moviesSlice.actions;

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});
export { store };
