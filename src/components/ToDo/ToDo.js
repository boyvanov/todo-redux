import React, { Component } from "react";
import { ToDoInput } from "../ToDoInput/ToDoInput";
import { ToDoList } from "../ToDoList/ToDoList";
import { StyledToDo } from "./styles";

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: "",
      id: 0
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleClick() {
    const { todos, value, id } = this.state;
    const todo = {
      id: id,
      value: value
    };

    if (!value) return false;

    this.setState({
      todos: [...todos, todo],
      value: "",
      id: id + 1
    });
  }

  render() {
    const { todos, value } = this.state;
    return (
      <StyledToDo>
        <ToDoInput value={value} onChange={value => this.handleChange(value)} />
        <ToDoList todos={todos} onClick={() => this.handleClick()} />
      </StyledToDo>
    );
  }
}
