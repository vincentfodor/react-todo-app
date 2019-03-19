import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  state = {
    isHovered: false
  }

  handleMouseEnter = () => {
    this.setState({
      isHovered: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      isHovered: false
    });
  }

  render() {
    const { content, handleDeleteButtonClick, noTodos } = this.props;
    const renderButtonClass = this.state.isHovered ? 'todo-delete-button' : 'todo-delete-button todo-delete-button--hidden';
    const renderButton = noTodos ? null : <button className={renderButtonClass} onClick={handleDeleteButtonClick}>X</button>
    const renderTodoClass = noTodos ? 'todo todo--type-red' : 'todo'
    return (
      <div className={renderTodoClass} onMouseOver={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <p className="todo-content">{content}</p>
        {renderButton}
      </div>
    )
  }
}

export default Todo;