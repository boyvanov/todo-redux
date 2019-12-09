import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, string } from 'prop-types';
import { addTodo, changeFilter, cleanInput } from '../../actions/todo';
import { TodoInput } from '../../components/todo-input/todo-input';
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
    const { state, todos, filter, count, changeFilter } = this.props;
    const isTodosExist = state.todos && state.todos.length > 0;

    return (
      <StyledToDo>
        <TodoInput onAdd={this.handleAddClickAndPressKey} />
        {isTodosExist && <ToDoList todos={todos} />}
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
  const { todos, filter, inputText } = state;
  const filteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  };

  const getTodosActiveCount = () =>
    todos.filter(todo => !todo.isCompleted).length;

  return {
    state,
    todos: filteredTodos(),
    filter,
    count: getTodosActiveCount(),
    inputText
  };
};

const mapDispatchToProps = {
  addTodo,
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
  addTodo: func.isRequired
};
