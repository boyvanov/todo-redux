import React from "react";
import styled from "styled-components";
// import "./styles";

const Ol = styled.ol`
  padding: 0 15px;
  & .todo__item {
    color: red;
  }
`;

const ToDoList = ({ todos }) => (
  <Ol className="todo__list">
    {todos.map(({id, value}) => (
      <li className="todo__item" key={id}>
        {value}
      </li>
    ))}
  </Ol>
);

export default ToDoList;
