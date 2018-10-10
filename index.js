
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

// This is dummy text, in a rel app we would use real data;
let articleLinks = [{
 id: 'link-0',
 url: 'www.howtographql.com',
 description: 'A resources to learn graphql. Check out the advanced sections for some more in-depth tutorials.'
}, {
 id: 'link-1',
 url: 'news.ycombinator.com',
 description: 'Hacker news is like reddit that doesn\'t suck.  Focused on tech.  Great place to improvey our chameleon skills.'
}, {
 id: 'link-2',
 url: 'https://www.graphqlhub.com/',
 description: 'Some practice APIs to play around with queries'
}]
let idCount = articleLinks.length

// This is the object that needs to match the stracture of our typeDefination Queries and Muatation
// All values should be functions and what they return is lie doing res.send...and
const resolvers = {

   Query: {
    welcome: () => `Hacker News clone begins.`,
    links:   () => articleLinks,
   },
}

// our server is looking for our typeDefs and our Resolvers
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
