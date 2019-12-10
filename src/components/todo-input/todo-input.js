import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { ToDoButton } from '../todo-button/todo-button';
import { Input, Form } from './styles';
import { store } from '../../store';
import { changeInput } from '../../actions/todo';

export class TodoInput extends PureComponent {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  changeValue = value => {
    store.dispatch(changeInput(value));
  };

  render() {
    const { onAdd } = this.props;
    console.log(store.getState());

    return (
      <Form onSubmit={onAdd}>
        <Input
          type="text"
          placeholder="Todo Name"
          autoFocus
          value={store.getState().inputText}
          onChange={e => this.changeValue(e.target.value)}
        />
        <ToDoButton onClick={onAdd} />
      </Form>
    );
  }
}

TodoInput.propTypes = {
  onAdd: func.isRequired
};
