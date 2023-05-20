const { gql } = require('apollo-server-express');

// Define GraphQL schema
const typeDefs = gql`
  type Customer {
    create_date: String
    last_update: String
    customer_id: Int
    address_id: Int
    activebool: Boolean
    first_name: String
    last_name: String
    email: String
  }
  
  type Film {
    film_id: ID!
    title: String!
    description: String
    release_year: Int
    language_id: Int
    rental_duration: Int
    rental_rate: Float
    length: Int
    replacement_cost: Float
    rating: String
    special_features: [String]
    fulltext: String
    last_update: String
  }
    
  type Query {
    customers: [Customer]
    films: [Film]
    filmById(film_id: ID!): Film
  }
`;

// Resolvers GraphQL query
const resolvers = {
    Query: {
      customers: async (_, __, { db }) => {
        try {
          const client = await db.connect();
          const result = await client.query('SELECT * FROM customer');
          client.release();
          return result.rows;
        } catch (error) {
          console.error('Errore durante l\'esecuzione della query:', error);
          throw new Error('Errore del server');
        }
      },
      films: async (_, __, { db }) => {
        try {
          const client = await db.connect();
          const result = await client.query('SELECT * FROM film');
          client.release();
          return result.rows;
        } catch (error) {
          console.error('Errore durante l\'esecuzione della query:', error);
          throw new Error('Errore del server');
        }
      },
      filmById: async (_, { film_id }, { db }) => {
        try {
          const client = await db.connect();
          const result = await client.query('SELECT * FROM film WHERE film_id = $1', [film_id]);
          client.release();
          return result.rows[0];
        } catch (error) {
          console.error('Errore durante l\'esecuzione della query:', error);
          throw new Error('Errore del server');
        }
      },
    },
  };

module.exports = { typeDefs, resolvers };