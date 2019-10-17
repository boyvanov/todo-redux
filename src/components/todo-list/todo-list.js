import React from 'react';
import { shape, string, number, func, arrayOf, bool } from 'prop-types';
import { ToDoItem } from '../todo-item/todo-item';
import { Ul } from './styles';

export const ToDoList = ({ todos, removeTodo, completeTodo }) => (
  <div>
    <Ul>
      {todos.map(({ id, text, isCompleted }) => (
        <ToDoItem
          key={id}
          text={text}
          id={id}
          isCompleted={isCompleted}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </Ul>
  </div>
);

ToDoList.propTypes = {
  todos: arrayOf(
    shape({
      id: number,
      text: string,
      isCompleted: bool
    })
  ).isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
