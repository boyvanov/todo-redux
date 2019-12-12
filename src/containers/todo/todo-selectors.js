import { createSelector } from 'reselect';

const getTodos = state => state.todos;
const getFilter = state => state.filter;

export const getFilteredTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  }
);

export const getTodosActiveCount = createSelector(
  getTodos,
  todos => todos.filter(todo => !todo.isCompleted).length
);
