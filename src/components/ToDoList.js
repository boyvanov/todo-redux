import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  const ToDoItems = props.ToDoS.map(item => (
    <li className="ToDo__item" key={item.id}>
      {item.value}
    </li>
  ));

  return <ol className="ToDo__list">{ToDoItems}</ol>;
}

export default ToDoList;
