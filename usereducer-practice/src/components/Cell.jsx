import React from "react";

const Cell = ({ cell, rowPos, colPos, gridDispatch }) => {
  let lastColor;
  if (cell && cell.length > 0) {
    lastColor = cell[cell.length - 1];
  } else {
    lastColor = "";
  }
  const colorClasses = {
    blue: "bg-blue-700",
    red: "bg-red-700",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
    none: "bg-gray-200",
  };

  const selectedClass = colorClasses[lastColor] || "bg-gray-200";
  return (
    <li
      className={`w-12 h-12 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105 cursor-pointer ${selectedClass}`}
      onClick={() => {
        gridDispatch({
          type: "SET_CELL_COLOR",
          rowPos,
          colPos,
        });
        console.log("Last cell color - ", lastColor);
      }}
    ></li>
  );
};

export default Cell;
