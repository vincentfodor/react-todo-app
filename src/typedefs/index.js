import { gql } from 'apollo-server';

export default gql`
  type Query {
    info: String!
    getAllTodos: [Todo]!
  }

  type Todo {
    id: ID!
    content: String!
  }
`