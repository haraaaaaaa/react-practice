import React, { useReducer } from "react";
import Form from "./Form";

const initialState = {
  grid: [
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
  ],
  selectedColor: "blue",
};

const gridReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, selectedColor: action.selectedColor };

    default:
      break;
  }
};

const Grid = () => {
  const [grid, gridDispatch] = useReducer(gridReducer, initialState);

  return (
    <>
      <Form gridDispatch={gridDispatch} />
    </>
  );
};

export default Grid;
