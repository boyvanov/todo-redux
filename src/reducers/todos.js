/* eslint-disable no-param-reassign */
import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  FETCH_TODOS_SUCCESS
} from '../actions/todo';

let TODOS = [];

if (!TODOS || !TODOS.length) {
  TODOS = [];
}

export const todos = (
  state = TODOS,
  { type, id, text, isCompleted, todos }
) => {
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
    case FETCH_TODOS_SUCCESS:
      const editTodos = todos.map(todo => {
        return {
          id: +todo.id,
          text: todo.label,
          isCompleted
        };
      });
      return [...state, ...editTodos];

    default:
      return state;
  }
};
