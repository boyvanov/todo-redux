import { CHANGE_FILTER } from '../actions/todo';

const BASE_FILTER = 'all';

export const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};
