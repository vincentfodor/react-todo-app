import mongoose from 'mongoose';
import Todo from './schemas/todo';

mongoose.connect('mongodb://127.0.0.1:27017/react-todo-app', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', () => console.log('Error: Could not connect to Database'));
db.once('open', () => console.log('Connected to database...'));

export default class TodoApi {
  async getAllTodos() {
    return await Todo.find({});
  }

  async createTodo(todo) {
    return await Todo.create({
      content: todo.content
    })
  }
}