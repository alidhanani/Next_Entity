// graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_ENTITIES = gql`
  query GetEntities {
    getEntities {
      id
      name
    }
  }
`;

export const ADD_ENTITY = gql`
  mutation AddNewEntry($input: CreateEntityInput!) {
    createEntity(input: $input) {
      id
      name
      ... on Contact {
        email
        phone
      }
      ... on Company {
        industry
        contactEmail
      }
    }
  }
`;

export const UPDATE_ENTITY = gql`
  mutation UpdateNewEntry($input: UpdateEntityInput!) {
    updateEntity(input: $input) {
      id
      name
    }
  }
`;
