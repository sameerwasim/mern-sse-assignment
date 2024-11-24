// Import necessary modules
import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

// Define the interface for User document
export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  role: "buyer" | "seller";
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Create a schema for the User model
const userSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["buyer", "seller"], default: "buyer" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as Error);
  }
});

// Implement comparePassword method
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the User model
export default mongoose.model<IUser>("User", userSchema);
