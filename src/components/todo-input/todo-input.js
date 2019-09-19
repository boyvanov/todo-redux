import React, { Component } from 'react';
import { func } from 'prop-types';
import { ToDoButton } from '../todo-button/todo-button';
import { Input, Form } from './styles';

export class ToDoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  removeInputValue(e) {
    e.preventDefault();
    this.setState({
      value: ''
    });
  }

  handleSubmit(e, value) {
    const { onSubmit } = this.props;
    onSubmit(e, value);
    this.removeInputValue(e);
  }

  handleAddClick(e, value) {
    const { onAddClick } = this.props;
    onAddClick(e, value);
    this.removeInputValue(e);
  }

  render() {
    const { value } = this.state;
    return (
      <Form onSubmit={e => this.handleSubmit(e, value)}>
        <Input
          type="text"
          placeholder="Todo Name"
          autoFocus
          value={value}
          onChange={e => this.handleChange(e.target.value)}
        />
        <ToDoButton onAddClick={e => this.handleAddClick(e, value)} />
      </Form>
    );
  }
}

ToDoInput.propTypes = {
  onAddClick: func.isRequired,
  onSubmit: func.isRequired
};
