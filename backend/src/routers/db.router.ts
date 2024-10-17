import { Router } from "express";
import {
  addProductPageView,
  getAllProductPageViews,
} from "src/controllers/db.controller";
import { checkDatabaseAvailability } from "src/middleware/dbMiddleware";

const router = Router();

router.post(
  "/product/:productId/view",
  checkDatabaseAvailability,
  addProductPageView
);
router.get("/product/view", checkDatabaseAvailability, getAllProductPageViews);

export default router;
