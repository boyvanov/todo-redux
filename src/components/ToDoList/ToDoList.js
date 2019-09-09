import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoButton } from "../ToDoButton/ToDoButton";
import { Ul, Footer, Counter, Filter } from "./styles";

export const ToDoList = ({ todos, onAddClick, onRemoveClick }) => (
  <div>
    <Ul>
      {todos.map(({ id, value }) => (
        <ToDoItem key={id} todo={value} onRemoveClick={onRemoveClick} />
      ))}
    </Ul>

    <Footer>
      <Counter />
      <Filter />
      <ToDoButton onAddClick={onAddClick} />
    </Footer>
  </div>
);
