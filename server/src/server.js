const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express');
const app = express();
var execSchema = require('./schema/schema')



const server = new ApolloServer( {schema: execSchema} );
server.applyMiddleware({ app });
app.listen({ port: 3000 }, () =>
  console.log('Now browse to http://localhost:3000' + server.graphqlPath)
);

