
// Graphql-yoga is like express for graph. It takes in the required setup and the 
// Routes request to where they need to go.

const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `

type Query {
 welcome: String!
 links: [Link!]!
}
type Link {
 id: ID!
 description: String!
 url:String!
}
`

// This is the object that needs to match the stracture of our typeDefination Queries and Muatation
// All values should be functions and what they return is lie doing res.send...and
const resolvers = {

   Query: {
    welcome: () => `Hacker News clone begins.`,
   },
}

// our server is looking for our typeDefs and our Resolvers
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
