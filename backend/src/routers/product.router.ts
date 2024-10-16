import { Router } from "express";
import {
  getAllProducts,
  getImage,
  getProductWithId,
  eatProducts,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductWithId);
router.get("/image/:imageName", getImage);
router.post("/eat", eatProducts);

export default router;
