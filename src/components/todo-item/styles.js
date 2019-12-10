import styled from 'styled-components';

export const ItemWrap = styled.li`
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: 0 none;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  &:hover {
    .remove {
      visibility: visible;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;
  margin-right: 10px;
`;

export const CheckBlock = styled.div`
  width: 60px;
`;

export const Text = styled.div`
  &.cross {
    text-decoration: line-through;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: firebrick;
  cursor: pointer;
  font-size: 20px;
  visibility: hidden;
`;
