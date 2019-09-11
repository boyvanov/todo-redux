import React from 'react';
import { func, string } from 'prop-types';
import { ToDoButton } from '../ToDoButton/ToDoButton';
import { Input, Form } from './styles';

export const ToDoInput = ({ onChange, onAddClick, onSubmit, value }) => (
  <Form onSubmit={e => onSubmit(e)}>
    <Input
      type="text"
      placeholder="Todo Name"
      autoFocus
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <ToDoButton onAddClick={onAddClick} />
  </Form>
);

ToDoInput.propTypes = {
  onChange: func.isRequired,
  onAddClick: func.isRequired,
  onSubmit: func.isRequired,
  value: string.isRequired
};
