// src/interfaces/routes/authRoutes.js
import express from "express";
import passport from "passport";
import { authController } from "../controllers/authController.js";

const router = express.Router();

// Initiate Google OAuth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://blindmate-bnef.vercel.app/login",
  }),
  authController.handleGoogleCallback
);

// Get current logged-in user
router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy((err) => {
      res.clearCookie("connect.sid", { path: "/" });
      res.send("Success");
    });
  });
});

export default router;
