import React from "react";
import { Wrapper } from "./stylesApp";
import { ToDo } from "./components/ToDo/ToDo";
import { GlobalStyle } from "./stylesBase";

export const App = () => (
  <Wrapper className="wrapper">
    <GlobalStyle />
    <ToDo />
  </Wrapper>
);
