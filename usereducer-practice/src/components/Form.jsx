import React from "react";

const Form = ({ gridDispatch }) => {
  const selectChangeHandler = (e) => {
    return gridDispatch({ type: "SET_SELECTED_COLOR", color: e.target.value });
  };

  return (
    <form className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <label
        htmlFor="colorSelect"
        className="block text-gray-700 text-lg font-medium mb-2"
      >
        Select Color
      </label>
      <select
        id="colorSelect"
        onChange={selectChangeHandler}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      >
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>

      <button
        type="button"
        onClick={() => gridDispatch({ type: "COLOR_BLANK_CELLS" })}
      >
        COLOR BLANK CELLS
      </button>
      <button
        type="button"
        onClick={() => gridDispatch({ type: "COLOR_COLORED_CELLS" })}
      >
        COLOR COLORED CELLS
      </button>
    </form>
  );
};

export default Form;
