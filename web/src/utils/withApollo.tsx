import { createWithApollo } from "./createWithApollo";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-unfetch";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL as string,
  credentials: "include",
  fetch,
});
const createClient = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

export const withApollo = createWithApollo(createClient);