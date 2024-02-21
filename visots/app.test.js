// Import necessary libraries for testing
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./app');
const express = require('express');

// Define your test suite
describe('GraphQL API Tests', () => {
  // Initialize ApolloServer instance
  // Create an Express server
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    // Start the ApolloServer
    async function startApolloServer() {
      // Start the ApolloServer
      await server.start();
    
      // Apply middleware to the Express server
      server.applyMiddleware({ app });
    
      // Start the Express server
      const PORT = process.env.PORT || 4000;
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
      });
    }
    
    // Call the function to start the server
    startApolloServer().catch((err) => {
      console.error('Error starting server:', err);
    });

// Create a test client
const { query, mutate } = createTestClient(server); // Use 'as any' to override the type mismatch

  // Define test cases for queries
  describe('Queries', () => {
    it('should fetch all entities', async () => {
      const GET_ENTITIES = gql`
        query {
          getEntities {
            id
            name
          }
        }
      `;

      const { data } = await query({ query: GET_ENTITIES });
      expect(data).toBeDefined();
      expect(data.getEntities).toHaveLength(4); // Assuming there are 2 contacts and 2 companies
    });

    it('should fetch a single entity by ID', async () => {
      const GET_ENTITY_BY_ID = gql`
        query GetEntity($id: ID!) {
          getEntity(id: $id) {
            id
            name
          }
        }
      `;

      // Assuming the ID exists in the mock data
      const { data } = await query({ query: GET_ENTITY_BY_ID, variables: { id: '1' } });
      expect(data).toBeDefined();
      expect(data.getEntity).toBeTruthy();
    });
  });

  // Define test cases for mutations
  describe('Mutations', () => {
    it('should create a new entity', async () => {
      const CREATE_ENTITY = gql`
        mutation CreateEntity($input: CreateEntityInput!) {
          createEntity(input: $input) {
            id
            name
          }
        }
      `;

      const newEntityInput = {
        input: {
          entityType: 'CONTACT',
          name: 'Test Contact',
          email: 'test@example.com',
          phone: '1234567890',
        },
      };

      const { data } = await mutate({ mutation: CREATE_ENTITY, variables: newEntityInput });
      expect(data).toBeDefined();
      expect(data.createEntity).toBeTruthy();
    });

    it('should update an existing entity', async () => {
      const UPDATE_ENTITY = gql`
        mutation UpdateEntity($input: UpdateEntityInput!) {
          updateEntity(input: $input) {
            id
            name
          }
        }
      `;

      const updatedEntityInput = {
        input: {
          id: '1', // Assuming the ID exists in the mock data
          entityType: 'CONTACT',
          name: 'Updated Contact Name',
        },
      };

      const { data } = await mutate({ mutation: UPDATE_ENTITY, variables: updatedEntityInput });
      expect(data).toBeDefined();
      expect(data.updateEntity).toBeTruthy();
      expect(data.updateEntity.name).toBe('Updated Contact Name');
    });
  });
});
