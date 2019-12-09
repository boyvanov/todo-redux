import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, string, number, bool, shape } from 'prop-types';
import { removeTodo, completeTodo } from '../../actions/todo';
import {
  ItemWrap,
  Item,
  CheckBlock,
  RemoveButton,
  Label,
  Text
} from './styles';

class ToDoItem extends PureComponent {
  render() {
    const { todo, removeTodo, completeTodo } = this.props;

    return (
      <ItemWrap>
        <Item>
          <Label>
            <CheckBlock>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => completeTodo(todo.id)}
              />
            </CheckBlock>
            <Text className={todo.isCompleted ? 'cross' : ''}>{todo.text}</Text>
          </Label>
          <RemoveButton
            className="remove"
            type="button"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </RemoveButton>
        </Item>
      </ItemWrap>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { todos } = state;
  const findTodo = () => {
    return todos.find(todo => todo.id === id);
  };

  return {
    todo: findTodo(),
    isCompleted: findTodo().isCompleted
  };
};

const mapDispatchToProps = {
  removeTodo,
  completeTodo
};

export const TodoItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItem);

ToDoItem.propTypes = {
  todo: shape({
    id: number,
    text: string,
    isCompleted: bool
  }).isRequired,
  id: number.isRequired,
  isCompleted: bool.isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
