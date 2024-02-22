# Next_Entity
The web application is the mixture of NextJS and GraphQL 
The application is developed in 2 parts:
- Frontend NextJS (viso_frontend)
- Backend GraohQL, ExpressJS (VisoTS)

### Frontend NextJS
Frontend is developed using the following dependency:
- NextJS
- Tailwind
- Apollo
- React-hook-form
- Headless-UI
- Zustand

#### Run
In order for executing the application, the backend needs to be executed first after which run the following command to execute:

The following to be execute to create the `node_module`
```
yarn
```

The following code to be executed to run the application which would be shown up on `localhost:3000`
```
yarn dev
```

The following code is used to building the application
```
yarn build
```


### Backend ExpressJS
The backend is developed using the following dependency:
- ExpressJS
- Apollo
- Typescript

#### Run
To execute the code the following commands needs to be executed:

This code is executed to create the `node_module` folder
```
yarn
```

The following code is used in executing the code:
```
npx ts-node app.ts
```


The graphql is developeing while using the following schema:

```gql
schema {
  query: Query
  mutation: Mutation
}

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
```