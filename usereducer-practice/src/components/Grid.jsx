import React, { useReducer } from "react";
import Cell from "./Cell";

const Grid = ({ grid, gridDispatch, selectedColor }) => {
  return (
    <div className="grid grid-rows-5 gap-5 max-w-md mx-auto mt-10">
      {grid.map((row, rowPos) => {
        return (
          <ul className="grid grid-cols-5 gap-5" key={rowPos}>
            {row.map((cell, colPos) => {
              return (
                <Cell
                  key={`${rowPos}-${colPos}`}
                  cell={cell}
                  rowPos={rowPos}
                  colPos={colPos}
                  gridDispatch={gridDispatch}
                  selectedColor={selectedColor}
                />
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Grid;
