import React from "react";
import Cell from "./Cell";

const Grid = ({ grid, dispatch }) => {
  return (
    <div className="grid grid-rows-5 gap-5 max-w-md mx-auto mt-10">
      {grid.map((row, rowPos) => (
        <div className="grid grid-cols-5 gap-5" key={rowPos}>
          {row.map((cell, colPos) => (
            <Cell
              key={`${rowPos}-${colPos}`}
              className={`w-12 h-12 bg-${className}-500 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105`}
              cell={cell}
              rowPos={rowPos}
              colPos={colPos}
              onClick={() =>
                dispatch({
                  type: "SET_CELL_COLOR",
                  rowPos,
                  colPos,
                  selectedColor: grid[rowPos][colPos].slice(-1)[0],
                })
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
