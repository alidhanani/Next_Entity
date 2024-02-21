// components/EntityList.tsx
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ENTITIES } from "../graphql/queries";

const EntityList = () => {
  const { loading, error, data } = useQuery(GET_ENTITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Entities</h1>
      <ul>
        {data.getEntities.map((entity: any) => (
          <li key={entity.id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EntityList;
