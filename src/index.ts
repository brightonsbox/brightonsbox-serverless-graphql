import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql

  type JobRole {
    organisation: String
    title: String
  }

  type Query {
    roles: [JobRole]
  }
`

const hardCodedRoles = [
  {
    organisation: 'Ministry of Justice (HMPPS)',
    title: 'Lead Software Developer',
  },
  {
    organisation: 'The Floow',
    title: 'Senior Platform Engineer',
  },
]

const resolvers = {
  Query: {
    roles: () => hardCodedRoles,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
