import express from "express";
import passport from "passport";
import {
  logoutUser,
  registerUser,
  showLoginPage,
  showRegisterPage,
} from "../controllers/authController.js";


const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

router.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);

router.get("/login",showLoginPage);

router.get("/register",showRegisterPage);
router.get("/logout", logoutUser);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);
router.post("/register", registerUser);
export default router;
