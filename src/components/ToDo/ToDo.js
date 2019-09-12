import React, { Component } from 'react';
import { ToDoInput } from '../ToDoInput/ToDoInput';
import { ToDoList } from '../ToDoList/ToDoList';
import { StyledToDo } from './styles';

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      id: 0,
      checked: false
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
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

  handleAddClickAndPressKey(e) {
    e.preventDefault();
    const { todos, value, id, checked } = this.state;

    if (!value) return false;

    const todo = {
      id,
      value,
      checked
    };

    this.setState({
      todos: [...todos, todo],
      value: '',
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
    const { todos, value } = this.state;
    return (
      <StyledToDo>
        <ToDoInput
          value={value}
          onChange={val => this.handleChange(val)}
          onAddClick={e => this.handleAddClickAndPressKey(e)}
          onSubmit={e => this.handleAddClickAndPressKey(e)}
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
