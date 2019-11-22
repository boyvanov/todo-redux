import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filters';
import { inputText } from './input-text';

export const rootReducer = combineReducers({ todos, filter, inputText });
