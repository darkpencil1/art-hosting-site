import { Router } from "express";
import { getAllTraditional } from "../controllers/traditional.controller";

const router = Router();

router.get("/", getAllTraditional);

export default router;
