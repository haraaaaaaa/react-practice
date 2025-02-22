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
  const updatedGrid = [...state.grid];

  switch (action.type) {
    case "SET_SELECTED_COLOR":
      console.log("Set selected color - ", action.color);
      return { ...state, selectedColor: action.color };

    case "SET_CELL_COLOR":
      console.log("Set cell color - ", state.selectedColor);
      updatedGrid[action.rowPos][action.colPos].push(state.selectedColor);
      return { grid: updatedGrid, selectedColor: state.selectedColor };

    case "COLOR_COLORED_CELLS":
      console.log("Colored already colored cells in - ", state.selectedColor);
      updatedGrid.map((row, rowPos) => {
        row.map((col, colPos) => {
          if (updatedGrid[rowPos][colPos].length >= 1) {
            updatedGrid[rowPos][colPos].push(state.selectedColor);
          }
        });
      });
      return { grid: updatedGrid, selectedColor: state.selectedColor };

    case "COLOR_BLANK_CELLS":
      console.log("Colored blank cells in - ", state.selectedColor);
      updatedGrid.map((row, rowPos) => {
        row.map((col, colPos) => {
          if (updatedGrid[rowPos][colPos].length < 1) {
            updatedGrid[rowPos][colPos].push(state.selectedColor);
          }
        });
      });
      return { grid: updatedGrid };
    case "UNDO":
      updatedGrid[action.rowPos][action.colPos].pop();
      return { grid: updatedGrid };

    default:
      break;
  }
};

function App() {
  const [state, gridDispatch] = useReducer(gridReducer, initialState);

  console.log("State: ", state);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-5">
      <div className="w-full md:w-1/3">
        <Form gridDispatch={gridDispatch} />
      </div>

      <div className="w-full md:w-2/3">
        <Grid
          grid={state.grid}
          gridDispatch={gridDispatch}
          selectedColor={state.selectedColor}
        />
      </div>
    </div>
  );
}

export default App;
