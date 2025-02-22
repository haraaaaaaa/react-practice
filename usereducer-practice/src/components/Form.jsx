import React from "react";

const Form = ({ gridDispatch }) => {
  const selectChangeHandler = (e) => {
    gridDispatch({ type: "SET_SELECTED_COLOR", color: e.target.value });
  };

  return (
    <form className="p-5 max-w-md mx-auto bg-white shadow-md rounded-lg border border-gray-200">
      <label
        htmlFor="colorSelect"
        className="block text-gray-700 text-lg font-semibold mb-3"
      >
        Select Color:
      </label>

      <select
        id="colorSelect"
        onChange={selectChangeHandler}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all mb-3"
      >
        <option value="blue">🔵 Blue</option>
        <option value="red">🔴 Red</option>
        <option value="green">🟢 Green</option>
      </select>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => gridDispatch({ type: "COLOR_BLANK_CELLS" })}
          className="w-1/2 px-3 py-1.5 text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-md transition-all shadow-sm text-sm"
        >
          COLOR BLANK
        </button>

        <button
          type="button"
          onClick={() => gridDispatch({ type: "COLOR_COLORED_CELLS" })}
          className="w-1/2 px-3 py-1.5 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-md transition-all shadow-sm text-sm"
        >
          COLOR COLORED
        </button>
      </div>
    </form>
  );
};

export default Form;
