import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

// Initialize a cached variable
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Using existing database connection");
    return cached.conn;
  }

  if (!MONGO_URI) throw new Error("MONGO_URI is MISSING");

  if (!cached.promise) {
    console.log("Creating new database connection");
    cached.promise = mongoose.connect(MONGO_URI, {
      dbName: "evently",
      bufferCommands: false,
    }).then(mongoose => {
      console.log("Database connected successfully");
      return mongoose;
    }).catch(error => {
      console.error("Database connection failed", error);
      throw error;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
