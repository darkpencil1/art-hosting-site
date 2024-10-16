import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  eatProducts,
  getAllProducts,
  getProductWithId,
  getImage,
} from "src/controllers/product.controller";
import {
  isValidProduct,
  replaceProducts,
} from "src/helpers/product.controller.helpers";
import IProduct from "@shared/types/ProductInterface";
import path from "path";
import fs from "fs";

// Mock the PrismaClient
const prismaMock = {
  product: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    deleteMany: jest.fn(),
    create: jest.fn(),
  },
  $disconnect: jest.fn(),
} as unknown as PrismaClient;

// Mock the helper functions
jest.mock("src/helpers/product.controller.helpers", () => ({
  isValidProduct: jest.fn() as jest.MockedFunction<(product: any) => boolean>, // Explicit mock for returning boolean
  replaceProducts: jest.fn(),
}));

describe("Product Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
      sendFile: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("eatProducts", () => {
    it("should return 400 if request body is not an array", async () => {
      req.body = {};
      await eatProducts(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Request body must be an array of products",
      });
    });

    it("should return 400 if a product has an invalid structure", async () => {
      req.body = [{}]; // Invalid product structure
      (isValidProduct as jest.Mock).mockReturnValue(false);
      await eatProducts(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Invalid product structure in request body",
      });
    });

    it("should replace products and return 200 on success", async () => {
      req.body = [{ id: 1, name: "Valid Product" }] as IProduct[];
      (isValidProduct as jest.Mock).mockReturnValue(true);
      (replaceProducts as jest.Mock).mockResolvedValue(undefined);
      await eatProducts(req as Request, res as Response);
      expect(replaceProducts).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith("Products replaced successfully");
    });

    it("should return 500 if replaceProducts throws an error", async () => {
      req.body = [{ id: 1, name: "Valid Product" }] as IProduct[];
      (isValidProduct as jest.Mock).mockReturnValue(true);
      (replaceProducts as jest.Mock).mockRejectedValue(
        new Error("Replace error")
      );
      await eatProducts(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Failed to create products",
      });
    });
  });

  describe("getAllProducts", () => {
    it("should return 200 and all products", async () => {
      const mockProducts = [{ id: 1, name: "Product 1" }];
      (prismaMock.product.findMany as jest.Mock).mockResolvedValue(
        mockProducts
      );
      await getAllProducts(req as Request, res as Response);
      expect(prismaMock.product.findMany).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockProducts);
    });

    it("should return 500 if there is an error retrieving products", async () => {
      (prismaMock.product.findMany as jest.Mock).mockRejectedValue(
        new Error("DB error")
      );
      await getAllProducts(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Failed to retrieve products",
      });
    });
  });

  describe("getProductWithId", () => {
    it("should return 400 for invalid product ID", async () => {
      req.params = { id: "abc" }; // Invalid number
      await getProductWithId(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: "Invalid product ID" });
    });

    it("should return 404 if product not found", async () => {
      req.params = { id: "1" };
      (prismaMock.product.findUnique as jest.Mock).mockResolvedValue(null);
      await getProductWithId(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        error: "Product with ID 1 not found",
      });
    });

    it("should return 200 and the product if found", async () => {
      const mockProduct = { id: 1, name: "Test Product" };
      req.params = { id: "1" };
      (prismaMock.product.findUnique as jest.Mock).mockResolvedValue(
        mockProduct
      );
      await getProductWithId(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockProduct);
    });

    it("should return 500 if there is an error retrieving the product", async () => {
      req.params = { id: "1" };
      (prismaMock.product.findUnique as jest.Mock).mockRejectedValue(
        new Error("DB error")
      );
      await getProductWithId(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Failed to retrieve product",
      });
    });
  });

  describe("getImage", () => {
    it("should return the image file if found", async () => {
      req.params = { imageName: "test-image.jpg" };
      const mockImagePath = path.join(
        __dirname,
        "..",
        "..",
        "src",
        "resources",
        "images",
        "test-image.jpg"
      );
      await getImage(req as Request, res as Response);
      expect(res.sendFile).toHaveBeenCalledWith(
        mockImagePath,
        expect.any(Function)
      );
    });

    it("should return 404 if image not found", async () => {
      req.params = { imageName: "non-existent.jpg" };
      (res.sendFile as jest.Mock).mockImplementationOnce((_path, callback) =>
        callback(new Error("Not Found"))
      );
      await getImage(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("Image not found");
    });
  });
});
