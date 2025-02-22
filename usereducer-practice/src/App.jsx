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
  console.log("Action dispatched:", action);
  switch (action.type) {
    case "SET_SELECTED_COLOR":
      console.log("Set selected color - ", action.color);
      return { ...state, selectedColor: action.color };
    case "SET_CELL_COLOR":
      console.log("Set cell color - ", state.selectedColor);
      const updatedGrid = [...state.grid];
      updatedGrid[action.rowPos][action.colPos].push(state.selectedColor);
      return { grid: updatedGrid, selectedColor: state.selectedColor };
    default:
      break;
  }
};

function App() {
  const [state, gridDispatch] = useReducer(gridReducer, initialState);

  console.log("State: ", state);

  return (
    <>
      <Form gridDispatch={gridDispatch} />
      <Grid grid={state.grid} gridDispatch={gridDispatch} selectedColor={state.selectedColor} />
    </>
  );
}

export default App;
