import React from 'react';
import { bool } from 'prop-types';
import { FooterWrap, Counter, Filter } from './styles';

export const Footer = ({ isTodosExist }) => (
  <FooterWrap>
    {isTodosExist && <Counter />}
    {isTodosExist && <Filter />}
  </FooterWrap>
);

Footer.propTypes = {
  isTodosExist: bool.isRequired
};
