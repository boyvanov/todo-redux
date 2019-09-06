import styled from "styled-components";

export const ItemWrap = styled.li`
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: 0 none;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    .remove {
      visibility: visible;
    }
  }
`;

export const InputBlock = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: firebrick;
  cursor: pointer;
  font-size: 20px;
  visibility: hidden;
`;
