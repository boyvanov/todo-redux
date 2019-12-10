import React from 'react';
import { arrayOf, object } from 'prop-types';
import { TodoItem } from '../todo-item/todo-item';
import { Ul } from './styles';

export const ToDoList = ({ todos }) => (
  <div>
    <Ul>
      {todos.map(({ id }) => (
        <TodoItem key={id} id={id} />
      ))}
    </Ul>
  </div>
);

ToDoList.propTypes = {
  todos: arrayOf(object).isRequired
};
