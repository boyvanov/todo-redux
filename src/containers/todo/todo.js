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

  render() {
    const {
      state,
      todos,
      filter,
      count,
      removeTodo,
      completeTodo,
      changeFilter
    } = this.props;
    const isTodosExist = state.todos && state.todos.length > 0;

    return (
      <StyledToDo>
        <ToDoinput onAdd={this.handleAddClickAndPressKey} />
        {isTodosExist && (
          <ToDoList
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        )}
        <Footer
          isTodosExist={isTodosExist}
          activeFilter={filter}
          changeFilter={changeFilter}
          amount={count}
        />
      </StyledToDo>
    );
  }
}

const mapStateToProps = state => {
  const filteredTodos = () => {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter(todo => todo.isCompleted);
      case 'active':
        return state.todos.filter(todo => !todo.isCompleted);
      default:
        return state.todos;
    }
  };

  const getTodosActiveCount = () =>
    state.todos.filter(todo => !todo.isCompleted).length;

  return {
    state: state,
    todos: filteredTodos(),
    filter: state.filter,
    count: getTodosActiveCount(),
    inputText: state.inputText
  };
};

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  completeTodo,
  changeFilter,
  cleanInput
};

export const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

// export const Todo = connect(
//   state => ({
//     todos: state.todos,
//     filter: state.filter,
//     inputText: state.inputText
//   }),
//   { addTodo, removeTodo, completeTodo, changeFilter, cleanInput }
// )(ToDo);

ToDo.propTypes = {
  todos: arrayOf(object).isRequired,
  filter: string.isRequired,
  addTodo: func.isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
