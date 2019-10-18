import React from 'react';
import { number, bool, string, func } from 'prop-types';
import { FooterWrap, Counter, Filter, Btn } from './styles';

const FILTER_BTNS = [
  {
    text: 'All',
    id: 'all'
  },
  {
    text: 'Active',
    id: 'active'
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

export const Footer = ({
  isTodosExist,
  activeFilter,
  changeFilter,
  amount
}) => (
  <FooterWrap>
    {/* {isTodosExist && <Counter />}
    {isTodosExist && <Filter />} */}
    {isTodosExist && <Counter>{`${amount} todos left`}</Counter>}
    {isTodosExist && (
      <Filter>
        {FILTER_BTNS.map(({ text, id }) => (
          <Btn
            key={id}
            onClick={() => changeFilter(id)}
            className={id === activeFilter ? 'active' : ''}
          >
            {text}
          </Btn>
        ))}
      </Filter>
    )}
  </FooterWrap>
);

Footer.propTypes = {
  amount: number.isRequired,
  isTodosExist: bool.isRequired,
  activeFilter: string.isRequired,
  changeFilter: func.isRequired
};
