import { ApolloClient as Apollo, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const RestApi = new RestLink({ uri: process.env.REACT_APP_POKE_API });

export const ApolloClient = new Apollo({
  link: RestApi,
  cache: new InMemoryCache(),
});
