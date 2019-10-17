import React, { Component } from 'react';
import { func, string, number, bool } from 'prop-types';
import {
  ItemWrap,
  Item,
  CheckBlock,
  RemoveButton,
  Label,
  Text
} from './styles';

export class ToDoItem extends Component {
  shouldComponentUpdate(nextProps) {
    const { isCompleted } = this.props;

    return isCompleted !== nextProps.isCompleted;
  }

  render() {
    const { text, id, isCompleted, removeTodo, completeTodo } = this.props;

    return (
      <ItemWrap>
        <Item>
          <Label>
            <CheckBlock>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => completeTodo(id)}
              />
            </CheckBlock>
            <Text className={isCompleted ? 'cross' : ''}>{text}</Text>
          </Label>
          <RemoveButton
            className="remove"
            type="button"
            onClick={() => removeTodo(id)}
          >
            X
          </RemoveButton>
        </Item>
      </ItemWrap>
    );
  }
}

ToDoItem.propTypes = {
  text: string.isRequired,
  isCompleted: bool.isRequired,
  id: number.isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
