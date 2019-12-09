import { CHANGE_INPUT, CLEAN_INPUT } from '../actions/todo';

const BASE_TEXT = '';

export const inputText = (state = BASE_TEXT, { type, value }) => {
  switch (type) {
    case CHANGE_INPUT:
      return value;
    case CLEAN_INPUT:
      return BASE_TEXT;
    default:
      return state;
  }
};
