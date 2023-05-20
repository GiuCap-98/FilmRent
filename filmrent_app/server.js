const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema'); // Import GraphQL schema
const { configureDB } = require('./db'); // Import database

async function startServer() {
  // Initialize Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Initialize Express app
  const app = express();

  // Set up and connect to the database
  const db = configureDB();
  server.context = { db };

  // Starts Apollo server
  await server.start();

  // Integrates the Apollo server with Express
  server.applyMiddleware({ app });

  // Start the Node.js server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

startServer();