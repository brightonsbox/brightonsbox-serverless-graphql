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

export { typeDefs, resolvers }