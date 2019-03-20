

export default class TodoApi {
  constructor() {
    this.todos = [
      {
        id: 1,
        content: 'This is the first todo'
      }
    ]
  }

  async getAllTodos() {
    return this.todos
  }
}