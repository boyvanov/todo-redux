/* eslint-disable no-param-reassign */
import { load } from 'redux-localstorage-simple';
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../actions/todo';

let TODOS = load({ namespace: 'todo-list' });

if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
  TODOS = {
    todos: []
  };
}

export const todos = (state = TODOS.todos, { type, id, text, isCompleted }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          text,
          isCompleted
        }
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== id);
    case COMPLETE_TODO:
      return state.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    default:
      return state;
  }
};
