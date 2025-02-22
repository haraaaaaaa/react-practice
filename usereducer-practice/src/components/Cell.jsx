import React from "react";

const Cell = ({ cell, rowPos, colPos, gridDispatch, selectedColor }) => {
  let lastColor = "";
  if (cell) {
    lastColor = cell[cell.length - 1];
  }

  return (
    <li
      className={`w-12 h-12 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105 cursor-pointer ${
        lastColor ? `bg-${lastColor}-500` : "bg-white"
      } ${selectedColor && selectedColor !== lastColor ? `border-${selectedColor}-500` : ""}`}
      onClick={() =>
        gridDispatch({
          type: "SET_CELL_COLOR",
          rowPos,
          colPos,
          selectedColor,
        })
      }
    >
      {cell ? cell[cell.length - 1] : ""}
    </li>
  );
};

export default Cell;
