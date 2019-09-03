import React from "react";
import "./ToDoButton.css";

const ToDoButton = ({onClick}) => (
  <button className="ToDo__button" type="button" onClick={onClick}>
    Добавить
  </button>
);

export default ToDoButton;
