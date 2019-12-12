import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER,
  CHANGE_INPUT,
  CLEAN_INPUT,
  TODOS_HAS_ERRORED,
  TODOS_IS_LOADING,
  FETCH_TODOS_SUCCESS
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

export const todosHasErrored = bool => ({
  type: TODOS_HAS_ERRORED,
  hasErrored: bool
});

export const todosIsLoading = bool => ({
  type: TODOS_IS_LOADING,
  isLoading: bool
});

export const todosFetchDataSuccess = (id, isCompleted, todos) => ({
  type: FETCH_TODOS_SUCCESS,
  id,
  isCompleted,
  todos
});

export const todosFetchData = url => dispatch => {
  dispatch(todosIsLoading(true));

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(todosIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(todos =>
      dispatch(todosFetchDataSuccess(new Date().getTime(), false, todos))
    )
    .catch(() => {
      dispatch(todosHasErrored(true));
      dispatch(todosIsLoading(false));
    });
};
