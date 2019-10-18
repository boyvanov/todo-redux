import React from 'react';
import { func } from 'prop-types';
import { AddButton } from './styles';

export const ToDoButton = ({ onClick }) => (
  <AddButton type="button" onClick={e => onClick(e)}>
    Add
  </AddButton>
);

ToDoButton.propTypes = {
  onClick: func.isRequired
};