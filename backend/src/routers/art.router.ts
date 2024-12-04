import { Router } from "express";
import digitalRouter from "./digital.router";
import traditionalRouter from "./traditional.router";

const router = Router();

router.use("/digital", digitalRouter);
router.use("/traditional", traditionalRouter);

export default router;
