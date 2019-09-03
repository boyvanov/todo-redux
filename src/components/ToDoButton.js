import React from "react";
import "./ToDoButton.css";

function ToDoButton(props) {
  return (
    <button className="ToDo__button" type="button" onClick={props.onClick}>
      Добавить
    </button>
  );
}

export default ToDoButton;
