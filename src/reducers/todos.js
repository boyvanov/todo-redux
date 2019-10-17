/* eslint-disable no-param-reassign */
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../constants';

export const todos = (state = [], action) => {
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
