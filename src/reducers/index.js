import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filters';
import { inputText } from './input-text';
import { hasErrored } from './error';
import { isLoading } from './loading';

export const rootReducer = combineReducers({
  todos,
  filter,
  inputText,
  hasErrored,
  isLoading
});
