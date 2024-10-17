import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addProductPageView = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    // Check if a record for this product already exists
    const pageView = await prisma.productPageView.findFirst({
      where: { productId: parseInt(productId) },
    });

    if (pageView) {
      // Increment view count if record exists
      await prisma.productPageView.update({
        where: { id: pageView.id },
        data: { viewCount: { increment: 1 } },
      });
    } else {
      // Create new record if it doesn't exist
      await prisma.productPageView.create({
        data: { productId: parseInt(productId) },
      });
    }

    res.json({ message: "Page view recorded successfully" });
  } catch (error) {
    console.error("Error recording page view:", error);
    res.status(500).json({ message: "Failed to record page view" });
  }
};

const getAllProductPageViews = async (_: Request, res: Response) => {
  try {
    const pageViews = await prisma.productPageView.findMany();

    if (pageViews.length > 0) {
      // Return all page views for each product
      res.json(pageViews);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.error("Error fetching page views:", error);
    res.status(500).json({ message: "Failed to fetch page views" });
  }
};

export { addProductPageView, getAllProductPageViews };
