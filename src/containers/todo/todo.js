import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, string } from 'prop-types';
import {
  addTodo,
  changeFilter,
  cleanInput,
  todosFetchData
} from '../../actions/todo';
import { TodoInput } from '../../components/todo-input/todo-input';
import { ToDoList } from '../../components/todo-list/todo-list';
import { Footer } from '../../components/footer/footer';
import { StyledToDo } from './styles';
import { getFilteredTodos, getTodosActiveCount } from './todo-selectors';

class ToDo extends Component {
  handleAddClickAndPressKey = e => {
    e.preventDefault();

    const { todosFetchData, inputText, addTodo, cleanInput } = this.props;

    if (!inputText) {
      todosFetchData('http://5826ed963900d612000138bd.mockapi.io/items');
      return;
    }

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

const mapStateToProps = state => ({
  state,
  todos: getFilteredTodos(state),
  filter: state.filter,
  count: getTodosActiveCount(state),
  inputText: state.inputText
});

const mapDispatchToProps = {
  addTodo,
  changeFilter,
  cleanInput,
  todosFetchData
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
  todosFetchData: func.isRequired
};
