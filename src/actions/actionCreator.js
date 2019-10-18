import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER
} from '../constants';

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

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
