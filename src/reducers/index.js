import { combineReducers } from 'redux';
import { todos } from './todos';
import { filter } from './filters';

export const rootReducer = combineReducers({ todos, filter });
