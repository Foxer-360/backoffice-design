import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

import { defaults, resolvers, typeDefs } from './local';
import mutations from './mutations';
import queries from './queries';

const cache = new InMemoryCache();

const stateLink = withClientState({
	cache,
	defaults,
	resolvers,
	typeDefs
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_SERVER });

const client = new ApolloClient({
  cache,
	connectToDevTools: true,
	link: ApolloLink.from([
		stateLink,
		httpLink
	])
});

export {
	client,
	queries,
	mutations
};
