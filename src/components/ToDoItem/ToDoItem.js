import React from 'react';
import { func, string, number } from 'prop-types';
import { ItemWrap, Item, CheckBlock, RemoveButton, Label } from './styles';

export const ToDoItem = ({ value, onRemoveClick, id }) => (
  <ItemWrap>
    <Item>
      <Label>
        <CheckBlock>
          <input type="checkbox" />
        </CheckBlock>
        <div>{value}</div>
      </Label>
      <RemoveButton
        className="remove"
        type="button"
        onClick={() => onRemoveClick(id)}
      >
        X
      </RemoveButton>
    </Item>
  </ItemWrap>
);

ToDoItem.propTypes = {
  value: string.isRequired,
  onRemoveClick: func.isRequired,
  id: number.isRequired
};
