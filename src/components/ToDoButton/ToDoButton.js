import React from "react";
import styled from "styled-components";
// import "./styles";

const Button = styled.button`
  padding: 5px;
`;

const ToDoButton = ({onClick}) => (
  <Button className="todo__button" type="button" onClick={onClick}>
    Добавить
  </Button>
);

export default ToDoButton;
