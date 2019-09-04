import React from "react";
import "./ToDoList.css";

const ToDoList = ({ todos }) => (
  <ol className="ToDo__list">
    {todos.map(({id, value}) => (
      <li className="ToDo__item" key={id}>
        {value}
      </li>
    ))}
  </ol>
);

export default ToDoList;
