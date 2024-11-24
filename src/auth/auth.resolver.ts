import { AuthService } from "./auth.service";

const authService = new AuthService();

export const authResolvers = {
  Mutation: {
    signUp: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      return authService.signUp(email, password);
    },
    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      return authService.login(email, password);
    },
    switchRole: async (_: any, { token }: { token: string }) => {
      return authService.switchRole(token);
    },
  },
};
