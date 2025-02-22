import React from "react";

const Cell = ({ cell, rowPos, colPos, dispatch }) => {
  return (
    <li className="p-3 mb-3 rounded-md shadow-lg cursor-pointer" onClick={() => dispatch({ type: "SET_CELL_COLOR", rowPos, colPos })}>
      {cell}
    </li>
  );
};

export default Cell;
