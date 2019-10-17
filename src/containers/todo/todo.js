/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object } from 'prop-types';
import { addTodo, removeTodo, completeTodo } from '../../actions/actionCreator';
import { ToDoInput } from '../../components/todo-input/todo-input';
import { ToDoList } from '../../components/todo-list/todo-list';
import { Footer } from '../../components/footer/footer';
import { StyledToDo } from './styles';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      todoText: value
    });
  };

  handleAddClickAndPressKey = e => {
    e.preventDefault();

    const { todoText } = this.state;
    const { addTodo } = this.props;

    if (!todoText) return;

    addTodo(new Date().getTime(), todoText, false);

    this.setState({
      todoText: ''
    });
  };

  render() {
    const { todos, removeTodo, completeTodo } = this.props;
    const { todoText } = this.state;
    const isTodosExist = todos && todos.length > 0;

    return (
      <StyledToDo>
        <ToDoInput
          onAdd={this.handleAddClickAndPressKey}
          onChange={this.handleInputChange}
          todoText={todoText}
        />
        {isTodosExist && (
          <ToDoList
            todos={todos}
            onRemoveClick={this.handleRemoveClick}
            onChecked={this.handleChecked}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        )}
        {<Footer isTodosExist={isTodosExist} />}
      </StyledToDo>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),
  { addTodo, removeTodo, completeTodo }
)(ToDo);

ToDo.propTypes = {
  todos: arrayOf(object).isRequired,
  addTodo: func.isRequired,
  removeTodo: func.isRequired,
  completeTodo: func.isRequired
};
