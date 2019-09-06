import React from "react";
import { ItemWrap, Item, InputBlock, RemoveButton } from "./styles";

export const ToDoItem = ({ todo }) => (
  <ItemWrap>
    <Item>
      <label>
        <InputBlock>
          <input type="checkbox" />
        </InputBlock>
        <div>{todo}</div>
      </label>
      <RemoveButton className="remove" type="button">X</RemoveButton>
    </Item>
  </ItemWrap>
);
