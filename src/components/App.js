import React from 'react';
import { TodoListContainer, AddTodoItemContainer } from '../containers/TodoContainer';

// Top-Level Component
class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List:</h3>
        <TodoListContainer />
        <AddTodoItemContainer />
      </div>
    );
  }
}

export default App;