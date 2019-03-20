import { gql } from 'apollo-server';

export default gql`
  type Query {
    info: String!
    getAllTodos: [Todo]!
  }

  type Mutation {
    createTodo(content: String!): Todo!
  }

  type Todo {
    _id: ID!
    content: String!
  }
`