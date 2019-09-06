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

export const ToDoList = ({ todos, onClick }) => (
  <ToDoListWrap>
    <Content>
      <Ul>
        {todos.map(({ id, value }) => (
          <ToDoItem key={id} todo={value} />
        ))}
      </Ul>
    </Content>
    <Footer>
      <FooterContent>
        <Counter />
        <Filter />
        <ToDoButton onClick={onClick} />
      </FooterContent>
    </Footer>
  </ToDoListWrap>
);
