/* eslint-disable import/named */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Todo } from '../../containers/todo/todo';
import { GlobalStyle, Wrapper } from './styles';

export const App = () => (
  <Provider store={store}>
    <Wrapper>
      <GlobalStyle />
      <Todo />
    </Wrapper>
  </Provider>
);
