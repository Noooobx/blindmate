import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;

  // Ensure the connection string is present
  if (!mongoURI) {
    console.error("❌ MONGO_URI not found in environment variables.");
    process.exit(1);
  }

  try {
    // Attempt connection to MongoDB
    const conn = await mongoose.connect(mongoURI);

    // Log the host on successful connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log connection error and exit to prevent from running without DB
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
