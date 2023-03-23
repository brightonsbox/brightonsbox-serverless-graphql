const typeDefs = `#graphql

  type Education {
    yearFrom: Int
    yearTo: Int
    establishment: String
    courseTitle: String
    grade: String
  }

  type Skill {
    name: String
    category: String
  }

  type JobRole {
    organisation: String
    title: String
  }

  type Query {
    firstName: String
    lastName: String
    educationHistory: [Education]
    skills: [Skill]
    roles: [JobRole]
  }
`

const hardCodedEducationHistory = [
  {
    yearFrom: 2008,
    yearTo: 2012,
    establishment: 'University of Cambridge, Girton College',
    courseTitle: 'MSci, MA (Cantab) Natural Sciences: Experimental and Theoretical Physics',
    grade: '2.1',
  }
]

const hardCodedSkills = [
  {
    category: 'Languages / Frameworks / Tools',
    skills: [
      'Node.js',
      'Express.js',
      'Nunjucks',
      'React.js',
      'Redux.js',
    ]
  },
  {
    category: 'Scripting Languages',
    skills: [ 'Bash', 'Python' ],
  }
]

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
    firstName: () => 'Jonathan',
    lastName: () => 'Brighton',
    educationHistory: () => hardCodedEducationHistory,
    skills: () => hardCodedSkills.flatMap(category => category.skills.map(skill => ({ name: skill, category: category.category }))),
    roles: () => hardCodedRoles,
  },
}

export { typeDefs, resolvers }