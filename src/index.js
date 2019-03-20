import { ApolloServer } from 'apollo-server';

import typeDefs from './typedefs';
import resolvers from './resolvers';

import TodoApi from './datasources/todo';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    todoApi: new TodoApi()
  })
});

server.listen()
  .then(({url}) => {
    console.log(`Backend server listening on ${url}`)
  });