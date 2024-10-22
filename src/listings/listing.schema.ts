// Import necessary modules
import mongoose, { Schema, Document, Types } from "mongoose";

// Define the interface for Listing document
export interface IListing extends Document {

}

// Create a schema for the Listing model
const listingSchema: Schema<IListing> = new Schema(
    {
    },
    { timestamps: true }
);

// Create and export the Listing model
export default mongoose.model<IListing>("Listing", listingSchema);