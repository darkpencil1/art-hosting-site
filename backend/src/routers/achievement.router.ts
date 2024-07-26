import { Router } from "express";
import { getAllAchievements } from "../controllers/achievement.controller";

const router = Router();

router.get("/", getAllAchievements);

export default router;
