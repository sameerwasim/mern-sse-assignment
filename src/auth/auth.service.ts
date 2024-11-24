import User from "../users/user.schema";
import { JWTService } from "../services/jwt.service";

export class AuthService {
  private jwtService = JWTService.getInstance();

  async signUp(email: string, password: string) {
    // Create a new user with buyer role by default
    const user = new User({ email, password, role: "buyer" });
    await user.save();

    const token = this.jwtService.signToken({
      userId: user.id,
      role: user.role,
    });
    return { token, user };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Invalid credentials");
    }

    const token = this.jwtService.signToken({
      userId: user.id,
      role: user.role,
    });
    return { token, user };
  }

  async switchRole(token: string) {
    const decoded = this.jwtService.verifyToken(token);
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Switch role
    user.role = user.role === "buyer" ? "seller" : "buyer";
    await user.save();

    const newToken = this.jwtService.signToken({
      userId: user.id,
      role: user.role,
    });
    return { token: newToken, user };
  }
}
