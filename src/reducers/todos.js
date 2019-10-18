/* eslint-disable no-param-reassign */
import { load } from 'redux-localstorage-simple';
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../constants';

let TODOS = load({ namespace: 'todo-list' });

if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
  TODOS = {
    todos: []
  };
}

export const todos = (state = TODOS.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted
        }
      ];
    case REMOVE_TODO:
      return [...state].filter(todo => todo.id !== action.id);
    case COMPLETE_TODO:
      return [...state].map(todo => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    default:
      return state;
  }
};
