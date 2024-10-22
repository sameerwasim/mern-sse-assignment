import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";
import UserType from './user.graphql'

// Queries
const UserQueries = new GraphQLObjectType({
    name: "UserQueryType",
    fields: {
        // Todo: Only Admin User can fetch All the users.
        users: {
            type: new GraphQLList(UserType),
            resolve: async () => { },
        },

        // Todo: Only Admin user and the user himself can fetch their data.
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve: async (_, args) => { },
        },
    },
});

// Mutations
const UserMutations = new GraphQLObjectType({
    name: "UserMutations",
    fields: {
        // Todo: Only Admin user can update another to become an admin
        updateUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                isAdmin: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_, args) => {

            },
        },

        // Only Admin user and the user himself can delete their account.
        deleteUser: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve: async (_, args) => {

            },
        },
    },
});

export { UserMutations, UserQueries }