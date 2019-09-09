import React from "react";
import { AddButton } from "./styles";

export const ToDoButton = ({ onAddClick }) => (
  <AddButton className="todo__button" type="button" onClick={onAddClick}>
    Добавить
  </AddButton>
);
