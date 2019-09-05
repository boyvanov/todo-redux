import React from "react";
import { Input } from "./styles";

export const ToDoInput = ({ onChange, value }) => (
  <Input
    className="todo__input"
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
