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
    none: "bg-gray-200",
  };

  const selectedClass = colorClasses[lastColor] || "bg-gray-200";
  return (
    <li
      className={`relative w-16 h-16 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center justify-center ${selectedClass}`}
      onClick={() => {
        gridDispatch({
          type: "SET_CELL_COLOR",
          rowPos,
          colPos,
        });
        console.log("Last cell color - ", lastColor);
      }}
    >
      <button
        type="button"
        className="absolute bottom-1 text-xs px-2 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all"
        onClick={(e) => {
          e.stopPropagation(); // stops set_cell_color from being dispatched because they are in the same wrapper
          gridDispatch({
            type: "UNDO",
            rowPos,
            colPos,
          });
          console.log("Reverted last color for cell on ", rowPos, " ", colPos);
        }}
      >
        UNDO
      </button>
    </li>
  );
};

export default Cell;
