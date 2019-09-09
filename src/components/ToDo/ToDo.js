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

  handleAddClickAndPressKey(key) {
    const { todos, value, id } = this.state;

    if (!value) return false;

    const todo = {
      id: id,
      value: value
    };

    if (value || key === "Enter") {
      this.setState({
        todos: [...todos, todo],
        value: "",
        id: id + 1
      });
    }
  }

  handleRemoveClick() {}

  render() {
    const { todos, value } = this.state;
    return (
      <StyledToDo>
        <ToDoInput
          value={value}
          onChange={value => this.handleChange(value)}
          onKeyPress={key => this.handleAddClickAndPressKey(key)}
        />
        <ToDoList
          todos={todos}
          onAddClick={() => this.handleAddClickAndPressKey()}
          onRemoveClick={() => this.handleRemoveClick()}
        />
      </StyledToDo>
    );
  }
}
