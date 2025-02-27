import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      console.log("Removed song");
    },
  },
});

export const { addSong, removeSong } = songsSlice.actions;

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };
