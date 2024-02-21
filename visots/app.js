"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
// Define your schema
const typeDefs = (0, apollo_server_express_1.gql) `
  interface Entity {
    id: ID!
    name: String!
  }

  type Contact implements Entity {
    id: ID!
    name: String!
    email: String!
    phone: String
  }

  type Company implements Entity {
    id: ID!
    name: String!
    industry: String!
    contactEmail: String
  }

  input CreateEntityInput {
    entityType: EntityType!
    name: String!
    email: String
    phone: String
    industry: String
    contactEmail: String
  }

  input UpdateEntityInput {
    id: ID!
    entityType: EntityType!
    name: String
    email: String
    phone: String
    industry: String
    contactEmail: String
  }

  enum EntityType {
    CONTACT
    COMPANY
  }

  type Mutation {
    createEntity(input: CreateEntityInput): Entity
    updateEntity(input: UpdateEntityInput): Entity
  }

  type Query {
    getEntities: [Entity]
    getEntity(id: ID!): Entity
  }
`;
// Mock data
const contacts = [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
];
const companies = [
    { id: '1', name: 'ABC Inc.', industry: 'Technology', contactEmail: 'info@abc.com' },
    { id: '2', name: 'XYZ Corp.', industry: 'Finance', contactEmail: 'info@xyzcorp.com' },
];
// Define resolvers
const resolvers = {
    Entity: {
        __resolveType(entity) {
            if (entity.email) {
                return 'Contact';
            }
            else if (entity.industry) {
                return 'Company';
            }
            return null;
        },
    },
    Query: {
        getEntities: () => [...contacts, ...companies],
        getEntity: (_, { id }) => {
            const entity = [...contacts, ...companies].find((entity) => entity.id === id);
            return entity || null;
        },
    },
    Mutation: {
        createEntity: (_, { input }) => {
            // You can implement logic to create the entity here
            return input;
        },
        updateEntity: (_, { input }) => {
            // You can implement logic to update the entity here
            return input;
        },
    },
};
// Create an Express server
const app = express();
// Create an Apollo server with the defined schema and resolvers
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
// Apply the Apollo GraphQL middleware to the Express server
server.applyMiddleware({ app });
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
