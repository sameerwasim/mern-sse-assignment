import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { UserQueries, UserMutations } from './users/users.resolver'

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        user: {
            type: UserQueries,
            resolve: (parent, args) => { } // Add Root Resolver If Necessary
        }
        // Todo: Add More Resolvers here for each of the defined modules
    }
})

const rootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        user: {
            type: UserMutations,
            resolve: (parent, args) => { }
        }
        // TodoL Add More Mutations Resolvers here for each of the defined modules
    }
})

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation,
})

export default schema;