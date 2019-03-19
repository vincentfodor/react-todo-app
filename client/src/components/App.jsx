import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    title: 'Todo App'
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-headline">{this.state.title}</h1>
        <TodoList />
      </div>
    )
  }
}

export default App;