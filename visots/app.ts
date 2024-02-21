import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Define your schema
export const typeDefs = gql`
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
    createEntity(input: CreateEntityInput!): Entity
    updateEntity(input: UpdateEntityInput!): Entity
  }

  type Query {
    getEntities: [Entity]
    getEntity(id: ID!): Entity
  }
`;

// Mock data
let contacts = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
];

let companies = [
  { id: '1', name: 'ABC Inc.', industry: 'Technology', contactEmail: 'info@abc.com' },
  { id: '2', name: 'XYZ Corp.', industry: 'Finance', contactEmail: 'info@xyzcorp.com' },
];

// Define your input types
interface CreateEntityInput {
    entityType: string; // or EntityType enum if defined
    name: string;
    email?: string;
    phone?: string;
    industry?: string;
    contactEmail?: string;
  }
  
  interface UpdateEntityInput {
    id: string;
    entityType: string; // or EntityType enum if defined
    name?: string;
    email?: string;
    phone?: string;
    industry?: string;
    contactEmail?: string;
  }

// Define resolvers
export const resolvers = {
  Entity: {
    __resolveType(entity: any) {
      if (entity.email) {
        return 'Contact';
      } else if (entity.industry) {
        return 'Company';
      }
      return null;
    },
  },
  Query: {
    getEntities: () => [...contacts, ...companies],
    getEntity: (_: any, { id }: { id: string }) => {
      const entity = [...contacts, ...companies].find((entity) => entity.id === id);
      return entity || null;
    },
  },
  Mutation: {
    createEntity: (_: any, { input }: { input: any }) => {
      const newEntity = { id: String(Math.random()), ...input };
      if (input.entityType === 'CONTACT') {
        contacts.push(newEntity);
      } else {
        companies.push(newEntity);
      }
      return newEntity;
    },
    updateEntity: (_: any, { input }: { input: any }) => {
      let entityToUpdate;
      if (input.entityType === 'CONTACT') {
        entityToUpdate = contacts.find((entity) => entity.id === input.id);
        if (!entityToUpdate) {
          throw new Error('Contact not found');
        }
        Object.assign(entityToUpdate, input);
      } else {
        entityToUpdate = companies.find((entity) => entity.id === input.id);
        if (!entityToUpdate) {
          throw new Error('Company not found');
        }
        Object.assign(entityToUpdate, input);
      }
      return entityToUpdate;
    },
  },
};

// Create an Express server
const app = express();

// Create an ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the ApolloServer
async function startApolloServer() {
  await server.start();

  // Apply middleware to the Express server
// @ts-ignore
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
