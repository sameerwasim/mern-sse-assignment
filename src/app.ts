import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
const { createHandler } = require("graphql-http/lib/use/express")
import schema from "./schema";
dotenv.config();
const app = express();
app.use(morgan("common"));



// USE HELMET AND CORS MIDDLEWARES
app.use(
    cors({
        origin: ["*"], // Comma separated list of your urls to access your api. * means allow everything
        credentials: true, // Allow cookies to be sent with requests
    })
);
// app.use(helmet());
app.use(
    helmet({
        contentSecurityPolicy:
            process.env.NODE_ENV === "production" ? undefined : false,
    })
);

app.use(express.json());

// DB CONNECTION

if (!process.env.MONGODB_URL) {
    throw new Error("MONGO_URI environment variable is not defined");
}

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected to the backend successfully");
    })
    .catch((err: Error) => console.log(err));



// Create and use the GraphQL handler.
app.all(
    "/graphql",
    createHandler({
        schema: schema,
    })
)

// Start backend server
const PORT = process.env.PORT || 8500;

// Check if it's not a test environment before starting the server

app.listen(PORT, () => {
    console.log(`Backend server is running at port ${PORT}`);
});

export default app;