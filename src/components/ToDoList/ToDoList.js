import React from "react";
import { Ol } from "./styles";

export const ToDoList = ({ todos }) => (
  <Ol className="todo__list">
    {todos.map(({ id, value }) => (
      <li className="todo__item" key={id}>
        {value}
      </li>
    ))}
  </Ol>
);
