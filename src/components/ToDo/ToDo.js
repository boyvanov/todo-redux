import React, { Component } from 'react';
import { ToDoInput } from '../todo-input/todo-input';
import { ToDoList } from '../todo-list/todo-list';
import { StyledToDo } from './styles';

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 0,
      checked: false
    };
  }

  handleChecked(itemId) {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(({ id, value, checked }) => {
        return {
          id,
          value,
          checked: id === itemId ? !checked : checked
        };
      })
    });
  }

  handleAddClickAndPressKey(e, value) {
    e.preventDefault();

    const { todos, id, checked } = this.state;

    if (!value) return false;

    const todo = {
      id,
      value,
      checked
    };

    this.setState({
      todos: [...todos, todo],
      id: id + 1
    });
  }

  handleRemoveClick(itemId) {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(({ id }) => id !== itemId)
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <StyledToDo>
        <ToDoInput
          onAddClick={(e, value) => this.handleAddClickAndPressKey(e, value)}
          onSubmit={(e, value) => this.handleAddClickAndPressKey(e, value)}
        />
        <ToDoList
          todos={todos}
          onRemoveClick={id => this.handleRemoveClick(id)}
          onChecked={id => this.handleChecked(id)}
        />
      </StyledToDo>
    );
  }
}
