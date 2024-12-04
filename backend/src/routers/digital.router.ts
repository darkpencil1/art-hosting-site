import { Router } from "express";
import { getAllDigital } from "../controllers/digital.controller";

const router = Router();

router.get("/", getAllDigital);

export default router;
