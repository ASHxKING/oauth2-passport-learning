import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import "./src/config/passport.js"
import session from "express-session";

import authRoutes from "./src/routes/authRoutes.js"


const app = express();
const port = 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());
app.use("/", authRoutes);
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
app.get(
  "/auth/google/secrets",
  passport.authenticate("google", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
);

app.get("/secrets", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:3000`);
});
