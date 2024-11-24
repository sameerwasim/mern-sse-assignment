import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export interface JWTPayload {
  userId: string;
  role: "buyer" | "seller";
}

export class JWTService {
  private static instance: JWTService;
  private readonly secretKey: string;

  private constructor() {
    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error("JWT SECRET_KEY is not defined in environment variables");
    }
    this.secretKey = secretKey;
  }

  public static getInstance(): JWTService {
    if (!JWTService.instance) {
      JWTService.instance = new JWTService();
    }
    return JWTService.instance;
  }

  public signToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: "24h" });
  }

  public verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, this.secretKey) as JWTPayload;
    } catch (error) {
      throw new Error("Invalid token");
    }
  }
}
