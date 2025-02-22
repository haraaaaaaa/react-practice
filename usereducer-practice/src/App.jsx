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
      console.log("Set selected color - ", action.color);
      return { ...state, selectedColor: action.color };
    case "SET_CELL_COLOR":
      console.log("Set cell selected color - ", state.selectedColor);
      const updatedGrid = [...state.grid];
      updatedGrid[action.rowPos][action.colPos].push(state.selectedColor);
      return { ...state, grid: updatedGrid };
    default:
      return state;
  }
};

function App() {
  const [state, gridDispatch] = useReducer(gridReducer, initialState);

  return (
    <>
      <Form gridDispatch={gridDispatch} />
      <Grid grid={state.grid} gridDispatch={gridDispatch} />
    </>
  );
}

export default App;
