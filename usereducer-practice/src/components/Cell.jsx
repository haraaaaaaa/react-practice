import React from "react";

const Cell = ({ cell, rowPos, colPos, gridDispatch, selectedColor }) => {
  let lastColor = "";
  if (cell && cell.length > 0) {
    lastColor = cell[cell.length - 1];
  }
  return (
    <li
      className={`w-12 h-12 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105 cursor-pointer bg-${lastColor}-700`}
      onClick={() => {
        gridDispatch({
          type: "SET_CELL_COLOR",
          rowPos,
          colPos,
        });
        console.log("Last cell color - ", lastColor);
      }}
    >
      {cell ? cell[cell.length - 1] : ""}
    </li>
  );
};

export default Cell;
