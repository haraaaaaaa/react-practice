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
    case "SET_SELECTED_COLOR":
      return { ...state, selectedColor: action.selectedColor };
    case "SET_CELL_COLOR":
      const updatedGrid = [...state.grid];
      updatedGrid[action.rowPos][action.colPos].push(action.selectedColor);
      return { grid: updatedGrid, selectedColor: state.selectedColor };
    default:
      break;
  }
};

function App() {
  const [state, gridDispatch] = useReducer(gridReducer, initialState);

  return (
    <>
      <Form gridDispatch={gridDispatch} />
      <Grid grid={state.grid} dispatch={gridDispatch} />
    </>
  );
}

export default App;
