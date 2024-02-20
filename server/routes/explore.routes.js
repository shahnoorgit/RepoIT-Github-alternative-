import express from "express";
import { exploreRepo } from "../Controllers/explore.controller.js";
import { ensureSAuth } from "../middleware/ensureAuth.js";

const router = express.Router();

router.get("/repos/:language", ensureSAuth, exploreRepo);

export default router;
