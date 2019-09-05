import React from "react";
import { Button } from "./styles";

export const ToDoButton = ({ onClick }) => (
  <Button className="todo__button" type="button" onClick={onClick}>
    Добавить
  </Button>
);
