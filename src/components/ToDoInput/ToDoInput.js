import React from "react";
import styled from "styled-components";
// import "./styles";

const Input = styled.input`
  outline: none;
`;

const ToDoInput = ({ onChange, value }) => (
  <Input
    className="todo__input"
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default ToDoInput;
