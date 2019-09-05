import React from "react";
import styled from "styled-components";
// import './styles';
import ToDo from "./components/ToDo/ToDo";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Wrapper className="wrapper">
    <ToDo />
  </Wrapper>
);

export default App;
