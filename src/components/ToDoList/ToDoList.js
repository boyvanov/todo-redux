import React from 'react';
import { shape, string, number, func, arrayOf } from 'prop-types';
import { ToDoItem } from '../ToDoItem/ToDoItem';

import { Ul, Footer, Counter, Filter } from './styles';

export const ToDoList = ({ todos, onRemoveClick }) => (
  <div>
    <Ul>
      {todos.map(({ id, value }) => (
        <ToDoItem
          key={id}
          value={value}
          id={id}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </Ul>

    <Footer>
      <Counter />
      <Filter />
    </Footer>
  </div>
);

ToDoList.propTypes = {
  todos: arrayOf(
    shape({
      id: number,
      value: string
    })
  ).isRequired,
  onRemoveClick: func.isRequired
};
