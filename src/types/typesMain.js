const { gql } = require("apollo-server");

// this graphlQL wrapper basically lets us create a graphQL schema which will be interpreted from a javascript string
module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]
    comments: [Comment]
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    user: User!
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    post: Post!
    user: User
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreatePostInput {
    title: String!
    body: String!
    user: ID!
  }

  input CreateCommentInput {
    text: String!
    user: ID!
    post: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createPost(input: CreatePostInput!): Post!
    createComment(input: CreateCommentInput!): Comment!
  }

  type Query {
    getUsers: [User!]!
    getPosts: [Post!]!
    getComments: [Comment!]!
  }
`;
