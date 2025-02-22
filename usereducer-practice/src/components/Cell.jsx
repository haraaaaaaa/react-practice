import React from "react";

const Cell = ({ rowPos, colPos, gridDispatch, selectedColor }) => {
  return (
    <li
      className={`w-12 h-12 bg-${selectedColor}-500 rounded-md border border-gray-300 shadow-sm transition-all hover:scale-105`}
      onClick={() => gridDispatch({ type: "SET_CELL_COLOR", rowPos, colPos })}
    ></li>
  );
};

export default Cell;
