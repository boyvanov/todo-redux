import React from "react";
import "./ToDoList.css";

const ToDoList = ({ ToDoS }) => (
  <ol className="ToDo__list">
    {ToDoS.map(item => (
      <li className="ToDo__item" key={item.id}>
        {item.value}
      </li>
    ))}
  </ol>
);

export default ToDoList;
