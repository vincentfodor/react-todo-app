import React, { Component } from 'react';
import Todo from './Todo/Todo.jsx';
import './TodoList.css'

class TodoList extends Component {
  state = {
    todos: []
  }

  handleSubmit = e => {
    e.preventDefault();

    const targetValue = e.target.input.value;

    if(targetValue === '') return null;
    
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: prevState.todos.length + 1,
          content: targetValue
        }
      ]
    }));
    
    e.target.input.value = null;
  }

  handleDeleteButtonClick = e => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== e)
    });
  }

  render() {
    const renderTodos = (this.state.todos.length) ? this.state.todos.map(todo => <Todo key={todo.id} content={todo.content} handleDeleteButtonClick={() => this.handleDeleteButtonClick(todo.id)} />) : <Todo content="No todos left here, go ahead and create one." noTodos="true" />
    return (
      <div className="todolist">
        <form className="todolist-form" onSubmit={this.handleSubmit}>
          <input className="todolist-form-input" type="text" name="input" placeholder="Add new todo..." />
          <button type="submit" hidden={true}></button>
        </form>
        <div className="todolist-todos">{renderTodos}</div>
      </div>
    )
  }
}

export default TodoList;