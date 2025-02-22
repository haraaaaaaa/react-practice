import React, { useReducer } from "react";
import Cell from "./Cell";

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

const Grid = () => {
  const [state, dispatch] = useReducer(gridReducer, initialState);
  const { grid, selectedColor } = state;

  return (
    <div className="grid grid-rows-5 gap-5 max-w-md mx-auto mt-10">
      {grid.map((row, rowPos) => (
        <div className="grid grid-cols-5 gap-5" key={rowPos}>
          {row.map((cell, colPos) => {
            return <Cell key={`${rowPos}-${colPos}`} cell={cell} rowPos={rowPos} colPos={colPos} dispatch={dispatch} selectedColor={selectedColor} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
