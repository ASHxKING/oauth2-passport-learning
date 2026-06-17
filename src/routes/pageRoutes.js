import express from "express";
import { ensureAuthenticated } from "../middleware/authMiddleware.js";

import {
  showHomePage,
  showSecretsPage,
  showSubmitPage,
  postSecret
} from "../controllers/pageController.js";

const router = express.Router();

router.get("/", showHomePage);

router.get(
  "/secrets",
  ensureAuthenticated,
  showSecretsPage
);

router.get("/submit",ensureAuthenticated ,showSubmitPage)

router.post("/submit",ensureAuthenticated ,postSecret)

export default router;