import express from "express";
import { ensureAuthenticated } from "../middleware/authMiddleware.js";

import {
  showHomePage,
  showSecretsPage,
} from "../controllers/pageController.js";

const router = express.Router();

router.get("/", showHomePage);

router.get(
  "/secrets",
  ensureAuthenticated,
  showSecretsPage
);

export default router;