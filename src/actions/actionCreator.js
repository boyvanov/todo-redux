import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from '../constants';

export const addTodo = (id, text, isCompleted) => ({
  type: ADD_TODO,
  id,
  text,
  isCompleted
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
});
