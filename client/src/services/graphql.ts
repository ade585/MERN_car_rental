import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri:`${process.env.REACT_APP_APOLLO_URI}/graphql` as string,
  cache: new InMemoryCache(),
});