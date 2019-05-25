import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]
    me: User
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
    email: String!
    messages: [Message!]
  }

  extend type Mutation {
    signUp(username: String!, email: String!, password: String!): Token!
  }

  type Token {
    token: String!
  }
`;
