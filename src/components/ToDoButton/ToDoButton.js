import React from "react";
import { AddButton } from "./styles";

export const ToDoButton = ({ onAddClick }) => (
  <AddButton type="button" onClick={onAddClick}>
    Добавить
  </AddButton>
);
