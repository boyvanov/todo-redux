import { TODOS_HAS_ERRORED } from '../actions/todo';

const BASE_ERROR = false;

export const hasErrored = (state = BASE_ERROR, { type, hasErrored }) => {
  switch (type) {
    case TODOS_HAS_ERRORED:
      return hasErrored;
    default:
      return state;
  }
};
