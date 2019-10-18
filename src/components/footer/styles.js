import styled from 'styled-components';

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 16px;
  padding-bottom: 20px;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 20px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;
export const Counter = styled.div``;
export const Filter = styled.div``;

export const Btn = styled.button`
  border: none;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  margin-left: 5px;

  &.active {
    border: 1px solid;
  }

  &:hover {
    border: 1px solid;
  }
`;
