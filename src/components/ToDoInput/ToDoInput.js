import React from "react";
import { Input } from "./styles";

export const ToDoInput = ({ onChange, onKeyPress, value }) => (
  <div>
    <Input
      type="text"
      placeholder="Todo Name"
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyPress={e => onKeyPress(e.key)}
    />
  </div>
);
