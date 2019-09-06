import React from "react";
import { ToDoInputWrap, Input } from "./styles";

export const ToDoInput = ({ onChange, value }) => (
  <ToDoInputWrap>
    <Input
      className="todo__input"
      type="text"
      placeholder="Todo Name"
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </ToDoInputWrap>
);
