import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import UserType from "../users/user.graphql";

const AuthPayloadType = new GraphQLObjectType({
  name: "AuthPayload",
  fields: () => ({
    token: { type: new GraphQLNonNull(GraphQLString) },
    user: { type: new GraphQLNonNull(UserType) },
  }),
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    signUp: {
      type: new GraphQLNonNull(AuthPayloadType),
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
    },
    login: {
      type: new GraphQLNonNull(AuthPayloadType),
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
    },
    switchRole: {
      type: new GraphQLNonNull(AuthPayloadType),
      args: {
        token: { type: new GraphQLNonNull(GraphQLString) },
      },
    },
  }),
});

export { AuthPayloadType, MutationType };
