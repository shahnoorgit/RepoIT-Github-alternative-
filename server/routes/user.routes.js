import express from "express";
import {
  LikedProfile,
  getLikes,
  userProfileandRepo,
} from "../Controllers/user.controller.js";
import { ensureSAuth } from "../middleware/ensureAuth.js";
const router = express.Router();

router.get("/profile/:username", userProfileandRepo);
router.get("/like", ensureSAuth, getLikes);
router.post("/like/:username", ensureSAuth, LikedProfile);
//Todo get likes and post like routes

export default router;
