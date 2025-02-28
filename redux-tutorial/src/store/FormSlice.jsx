import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      // action.payload === name
      state.name = action.payload;
    },
    changeCost(state, action) {
      // action.payload === cost
      state.cost = action.payload;
    },
  },
});
export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducers;
