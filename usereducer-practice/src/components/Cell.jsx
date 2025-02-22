import React from "react";

const Cell = ({ cell, rowPos, colPos, gridDispatch }) => {
  let lastColor = "";
  if (cell) {
    lastColor = cell[cell.length - 1];
  }

  return (
    <li
      className={`w-12 h-12 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105 cursor-pointer`}
      onClick={() => {
        console.log(lastColor);
        gridDispatch({
          type: "SET_CELL_COLOR",
          rowPos,
          colPos,
        });
      }}
    >
      {cell ? cell[cell.length - 1] : ""}
    </li>
  );
};

export default Cell;
