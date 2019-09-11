import React from 'react';
import { func } from 'prop-types';
import { AddButton } from './styles';

export const ToDoButton = ({ onAddClick }) => (
  <AddButton type="button" onClick={e => onAddClick(e)}>
    Добавить
  </AddButton>
);

ToDoButton.propTypes = {
  onAddClick: func.isRequired
};
