// Import core modules and dependencies
import express from "express";
import dotenv from "dotenv";

// Import custom modules
import userRouter from "./src/interfaces/routes/userRoutes.js";
import { connectDB } from "./src/config/db.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the port to run the server
const PORT = process.env.PORT || 5000;

// Mount user-related API routes under /api/users
app.use("/api/users", userRouter);

// Health check endpoint for monitoring or CI/CD checks
app.get("/api/health", (req, res) => {
  res.json({ status: "🟢 Server is healthy" });
});

// Async function to initialize the server and database connection
const init = async () => {
  try {
    // Establish MongoDB connection before starting the server
    await connectDB();

    // Start listening on the specified port
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (error) {
    // Log errors and exit process if server fails to start
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

// Initialize the application
init();
