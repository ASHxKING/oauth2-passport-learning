import express from "express";
import passport from "passport";
import {
  logoutUser,
  registerUser,
  showLoginPage,
  showRegisterPage,
} from "../controllers/authController.js";


const router = express.Router();


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
