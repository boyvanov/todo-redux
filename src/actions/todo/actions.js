import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER,
  CHANGE_INPUT,
  CLEAN_INPUT
} from './constants';

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

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value
});

export const cleanInput = () => ({
  type: CLEAN_INPUT
});
