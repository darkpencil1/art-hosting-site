import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  isValidProduct,
  replaceProducts,
} from "src/helpers/product.controller.helpers";
import path from "path";
import IProduct from "@shared/types/ProductInterface";

const prisma = new PrismaClient();

// Take in multiple products from JSON in request body
const eatProducts = async (req: Request, res: Response) => {
  try {
    const productsData: IProduct[] = req.body;

    // Check if request body is an array
    if (!Array.isArray(productsData)) {
      return res
        .status(400)
        .json({ error: "Request body must be an array of products" });
    }

    // Validate each product in the array
    for (const productData of productsData) {
      if (!isValidProduct(productData)) {
        return res
          .status(400)
          .json({ error: "Invalid product structure in request body" });
      }
    }
    // Replace old products with new ones
    await replaceProducts(productsData);
    res.status(200).send("Products replaced successfully");
  } catch (error) {
    console.error("Error creating products:", error);
    return res.status(500).json({ error: "Failed to create products" });
  }
};

const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    return res.status(500).json({ error: "Failed to retrieve products" });
  }
};

const getProductWithId = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Convert the id to a number (assuming ID is numeric)
  const productId = Number(id);

  // Check if the id is a valid number
  if (isNaN(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  try {
    // Find the product in the database by ID
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    // If product is not found, return 404
    if (!product) {
      return res
        .status(404)
        .json({ error: `Product with ID ${productId} not found` });
    }

    // Return the found product
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product by ID:", error);
    return res.status(500).json({ error: "Failed to retrieve product" });
  }
};

const getImage = (req: Request, res: Response) => {
  const imageName = req.params.imageName;

  const imagePath = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "resources",
    "images",
    imageName
  );

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
};

export { eatProducts, getAllProducts, getProductWithId, getImage };
