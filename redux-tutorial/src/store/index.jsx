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

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store);
