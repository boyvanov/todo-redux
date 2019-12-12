import { TODOS_IS_LOADING } from '../actions/todo';

const BASE_LOAD = false;

export const isLoading = (state = BASE_LOAD, { type, isLoading }) => {
  switch (type) {
    case TODOS_IS_LOADING:
      return isLoading;
    default:
      return state;
  }
};
