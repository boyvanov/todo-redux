import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { changeInput } from '../../actions/todo';
import { ToDoButton } from '../todo-button/todo-button';
import { Input, Form } from './styles';

class ToDoInput extends PureComponent {
  render() {
    const { onAdd, changeInput, inputText } = this.props;

    return (
      <Form onSubmit={onAdd}>
        <Input
          type="text"
          placeholder="Todo Name"
          autoFocus
          value={inputText}
          onChange={e => changeInput(e.target.value)}
        />
        <ToDoButton onClick={onAdd} />
      </Form>
    );
  }
}

export const TodoInput = connect(
  state => ({
    inputText: state.inputText
  }),
  { changeInput }
)(ToDoInput);

ToDoInput.propTypes = {
  onAdd: func.isRequired,
  changeInput: func.isRequired,
  inputText: string.isRequired
};
