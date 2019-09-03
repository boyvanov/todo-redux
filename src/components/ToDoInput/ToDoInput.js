import React from "react";
import "./ToDoInput.css";

const ToDoInput = ({ onChange, value }) => {
  return (
    <input
      className="ToDo__input"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default ToDoInput;
