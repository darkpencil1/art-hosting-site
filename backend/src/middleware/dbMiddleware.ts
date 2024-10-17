import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Middleware to check database availability
const checkDatabaseAvailability = async (
  _: Request,
  res: Response,
  next: Function
) => {
  try {
    // Try to run a simple query
    await prisma.$queryRaw`SELECT 1`;
    next();
  } catch (error) {
    console.error("Database unavailable:", error);
    res
      .status(500)
      .json({ message: "Database is not available. Please try again later." });
  }
};

export { checkDatabaseAvailability };
