// Import core modules and dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";

// Import custom modules
import userRouter from "./src/interfaces/routes/userRoutes.js";
import authRouter from "./src/interfaces/routes/authRoutes.js"; 
import { connectDB } from "./src/config/db.js";
import "./src/config/passport.js"; 
import postRouter from "./src/interfaces/routes/PostRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "*",
    credentials: true,
  })
);

app.use(
  session({
    secret: "Nandu@1029",
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/auth", authRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "🟢 Server is healthy" });
});

// Initialize server
const PORT = process.env.PORT || 3000;
const init = async () => {
  try {
    await connectDB();
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

init();
