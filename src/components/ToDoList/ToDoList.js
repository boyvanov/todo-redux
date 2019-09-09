import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoButton } from "../ToDoButton/ToDoButton";
import {
  ToDoListWrap,
  Ul,
  Content,
  Footer,
  FooterContent,
  Counter,
  Filter
} from "./styles";

export const ToDoList = ({ todos, onAddClick, onRemoveClick }) => (
  <ToDoListWrap>
    <Content>
      <Ul>
        {todos.map(({ id, value }) => (
          <ToDoItem key={id} todo={value} onRemoveClick={onRemoveClick} />
        ))}
      </Ul>
    </Content>
    <Footer>
      <FooterContent>
        <Counter />
        <Filter />
        <ToDoButton onAddClick={onAddClick} />
      </FooterContent>
    </Footer>
  </ToDoListWrap>
);
