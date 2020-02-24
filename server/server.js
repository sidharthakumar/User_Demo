const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define the schema
// define user query, user, and mutation
const typeDefs = gql`
type Query{
    users: [User]
}  

type User {
    email: String,
    name: String,
    id: Float
  }
type Mutation{
  addUser(email:String, name:String, id:Float):User
}

`;


const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation : {
    addUser: (_root,args) => {
      console.log(args);
      newUser =  {id:args.id, email:args.email, name:args.name};
      //add new user to list of users
      users.push(newUser);               
      return newUser},
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);

//dataset
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv"
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net"
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org"
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca"
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info"
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz"
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me"
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io"
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz"
      }
]