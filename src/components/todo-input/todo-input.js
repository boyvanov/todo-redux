import React from 'react';
import { func, string } from 'prop-types';
import { ToDoButton } from '../todo-button/todo-button';
import { Input, Form } from './styles';

export const ToDoInput = ({ onAdd, onChange, todoText }) => (
  <Form onSubmit={onAdd}>
    <Input
      type="text"
      placeholder="Todo Name"
      autoFocus
      value={todoText}
      onChange={onChange}
    />
    <ToDoButton onClick={onAdd} />
  </Form>
);

ToDoInput.propTypes = {
  onAdd: func.isRequired,
  onChange: func.isRequired,
  todoText: string.isRequired
};
