import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, string } from 'prop-types';
import {
  addTodo,
  removeTodo,
  completeTodo,
  changeFilter,
  cleanInput
} from '../../actions/todo';
import { ToDoinput } from '../../components/todo-input/todo-input';
import { ToDoList } from '../../components/todo-list/todo-list';
import { Footer } from '../../components/footer/footer';
import { StyledToDo } from './styles';

class ToDo extends Component {
  handleAddClickAndPressKey = e => {
    e.preventDefault();

    const { addTodo, inputText, cleanInput } = this.props;

    if (!inputText) return;

    addTodo(new Date().getTime(), inputText, false);
    cleanInput();
  };

  filterTodos = (todos, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  };

  getTodosActiveCount = todos => todos.filter(todo => !todo.isCompleted).length;

  render() {
    const {
      todos,
      removeTodo,
      completeTodo,
      filter,
      changeFilter
    } = this.props;
    const isTodosExist = todos && todos.length > 0;
    const filteredTodos = this.filterTodos(todos, filter);
    const todosCounter = this.getTodosActiveCount(todos);

    return (
      <StyledToDo>
        <ToDoinput onAdd={this.handleAddClickAndPressKey} />
        {isTodosExist && (
          <ToDoList
            todos={filteredTodos}
            onRemoveClick={this.handleRemoveClick}
            onChecked={this.handleChecked}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        )}
        {
          <Footer
            isTodosExist={isTodosExist}
            activeFilter={filter}
            changeFilter={changeFilter}
            amount={todosCounter}
          />
        }
      </StyledToDo>
    );
  }
}

export const Todo = connect(
  state => ({
    todos: state.todos,
    filter: state.filter,
    inputText: state.inputText
  }),
  { addTodo, removeTodo, completeTodo, changeFilter, cleanInput }
)(ToDo);

ToDo.propTypes = {
  todos: arrayOf(object).isRequired,
  filter: string.isRequired,
  addTodo: func.isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
