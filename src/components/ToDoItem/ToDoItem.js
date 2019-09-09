import React from "react";
import { ItemWrap, Item, CheckBlock, RemoveButton, Label } from "./styles";

export const ToDoItem = ({ todo, onRemoveClick }) => (
  <ItemWrap>
    <Item>
      <Label>
        <CheckBlock>
          <input type="checkbox" />
        </CheckBlock>
        <div>{todo}</div>
      </Label>
      <RemoveButton className="remove" type="button" onClick={onRemoveClick}>
        X
      </RemoveButton>
    </Item>
  </ItemWrap>
);
