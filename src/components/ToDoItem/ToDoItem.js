import React from 'react';
import { func, string, number, bool } from 'prop-types';
import { ItemWrap, Item, CheckBlock, RemoveButton, Label } from './styles';

export const ToDoItem = ({ value, id, checked, onRemoveClick, onChecked }) => (
  <ItemWrap>
    <Item>
      <Label>
        <CheckBlock>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onChecked(id)}
          />
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
  checked: bool.isRequired,
  id: number.isRequired,
  onRemoveClick: func.isRequired,
  onChecked: func.isRequired
};
