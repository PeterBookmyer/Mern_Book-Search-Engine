const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    #users: [User]!
    #user(userId: ID!): User
    me: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBook {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBook!): User
    #removeUser: User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
