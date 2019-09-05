import React from "react";
import { Wrapper } from "./stylesApp";
import { ToDo } from "./components/ToDo/ToDo";

export const App = () => (
  <Wrapper className="wrapper">
    <ToDo />
  </Wrapper>
);
