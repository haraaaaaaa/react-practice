import React from "react";

const selectChangeHandler = (e) => {
  return gridDispatch({ type: "SET_COLOR", color: e.target.value });
};

const Form = ({ gridDispatch }) => {
  return (
    <form>
      <select onChange={selectChangeHandler}>
        <option value="blue">BLUE</option>
        <option value="red">RED</option>
        <option value="green">GREEN</option>
      </select>
    </form>
  );
};

export default Form;
