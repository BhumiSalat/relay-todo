import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useQuery } from "relay-hooks";

export const HomeQuery = graphql`
  query Home_Query {
    viewer {
      id
      name
    }
  }
`;
const Home = () => {
  const { props, error } = useQuery(
    HomeQuery,
    {},
    {
      fetchPolicy: "store-or-network",
    }
  );
  return <div>{JSON.stringify({ props, error })}</div>;
};
export default Home;
