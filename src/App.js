import React from 'react';
import { Wrapper } from './stylesApp';
import { ToDo } from './components/todo/todo';
import { GlobalStyle } from './stylesBase';

export const App = () => (
  <Wrapper>
    <GlobalStyle />
    <ToDo />
  </Wrapper>
);
