import React from 'react';
import { shape, string, number, func, arrayOf, bool } from 'prop-types';
import { ToDoItem } from '../ToDoItem/ToDoItem';

import { Ul, Footer, Counter, Filter } from './styles';

export const ToDoList = ({ todos, onRemoveClick, onChecked }) => (
  <div>
    <Ul>
      {todos.map(({ id, value, checked }) => (
        <ToDoItem
          key={id}
          value={value}
          id={id}
          checked={checked}
          onRemoveClick={onRemoveClick}
          onChecked={onChecked}
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
      value: string,
      checked: bool
    })
  ).isRequired,
  onRemoveClick: func.isRequired,
  onChecked: func.isRequired
};
