import React, { Component } from "react";
import "./ToDo.css";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoButton from "../ToDoButton/ToDoButton";
import ToDoList from "../ToDoList/ToDoList";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToDoS: [],
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
    if (!this.state.value) return false;

    const { ToDoS, value, id } = this.state;
    const ToDo = {
      id: id,
      value: value
    };
    
    this.setState({
      ToDoS: [...ToDoS, ToDo],
      value: "",
      id: id + 1
    });

    console.log(this.state);
  }

  render = () => (
    <div className="ToDo">
      <ToDoInput
        value={this.state.value}
        onChange={value => this.handleChange(value)}
      />
      <ToDoList ToDoS={this.state.ToDoS} />
      <ToDoButton onClick={() => this.handleClick()} />
    </div>
  );
}

export default ToDo;
