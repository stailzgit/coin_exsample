const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

// port: process.env.PORT yet undefined but we will have this variable
// once we deployed to heroku
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
