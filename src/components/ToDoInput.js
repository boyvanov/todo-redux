import React from "react";
import "./ToDoInput.css";

function ToDoInput(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <input
      className="ToDo__input"
      type="text"
      value={props.value}
      onChange={handleChange}
    />
  );
}

export default ToDoInput;
