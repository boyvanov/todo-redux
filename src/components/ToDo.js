import React from "react";
import "./ToDo.css";
import ToDoInput from "./ToDoInput";
import ToDoButton from "./ToDoButton";
import ToDoList from "./ToDoList";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ToDoS: [],
      value: "",
      id: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  handleClick() {
    if (this.state.value) {
      let id = this.state.id;
      id += 1;
      const ToDoS = this.state.ToDoS.slice();
      const ToDo = {
        id: id,
        value: this.state.value
      };
      ToDoS.push(ToDo);

      this.setState({
        ToDoS: ToDoS,
        value: "",
        id: id
      });

      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="ToDo">
        <ToDoInput value={this.state.value} onChange={this.handleChange} />
        <ToDoList ToDoS={this.state.ToDoS} />
        <ToDoButton onClick={this.handleClick} />
      </div>
    );
  }
}

export default ToDo;
