export default {
  Query: {
    info: () => {
      return 'React, GraphQL todo app!'
    },
    getAllTodos: async (_, __, { dataSources }) => {
      return await dataSources.todoApi.getAllTodos()
    }
  },
  Mutation: {
    createTodo: async (_, args, { dataSources }) => {
      return await dataSources.todoApi.createTodo(args)
    }
  }
}