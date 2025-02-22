import React, { useReducer } from "react";
import Form from "./components/Form";
import Grid from "./components/Grid";

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
    case "SET_CELL_COLOR":
      const updatedGrid = [...state.grid];
      updatedGrid[action.rowPos][action.colPos].push(action.selectedColor);
      return { ...state, grid: updatedGrid };
    default:
      return state;
  }
};

function App() {
  const [state, gridDispatch] = useReducer(gridReducer, initialState);
  const { grid, selectedColor } = state;

  return (
    <>
      <Form gridDispatch={gridDispatch} />
      <Grid grid={grid} gridDispatch={gridDispatch} />
    </>
  );
}

export default App;
