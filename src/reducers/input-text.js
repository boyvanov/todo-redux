import { CHANGE_INPUT, CLEAN_INPUT } from '../actions/todo';

export const inputText = (state = '', { type, value }) => {
  switch (type) {
    case CHANGE_INPUT:
      state = value;
      return state;
    case CLEAN_INPUT:
      state = '';
      return state;
    default:
      return state;
  }
};
