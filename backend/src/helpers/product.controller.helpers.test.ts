import { replaceProducts, isValidProduct } from "./product.controller.helpers";
import { PrismaClient } from "@prisma/client";
import IProduct from "@shared/types/ProductInterface";

// TypeScript typing for the mock
type MockPrismaClient = {
  product: {
    deleteMany: jest.Mock;
    create: jest.Mock;
  };
  $transaction: jest.Mock;
  $disconnect: jest.Mock;
};

// Mock PrismaClient
jest.mock("@prisma/client", () => {
  const prismaMock: MockPrismaClient = {
    product: {
      deleteMany: jest.fn(),
      create: jest.fn(),
    },
    $transaction: jest.fn((callback) => callback(prismaMock)),
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => prismaMock) };
});

const prisma = new PrismaClient();

describe("replaceProducts", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it("should delete all existing products and insert new products", async () => {
    const products: IProduct[] = [
      {
        id: 1,
        name: "Test Product",
        productType: "poster",
        primer: "This is a primer",
        description: "This is a description",
        snapshot: "This is a snapshot",
        imageUrl: "https://example.com/image.jpg",
        images: ["https://example.com/image1.jpg"],
        price: 20.0,
        orientation: "portrait",
      },
      {
        id: 2,
        name: "Another Product",
        productType: "tag",
        primer: "Primer text",
        description: "Description text",
        snapshot: "Snapshot text",
        imageUrl: "https://example.com/image2.jpg",
        images: ["https://example.com/image1.jpg"],
        price: 15.0,
        orientation: "landscape",
      },
    ];

    await replaceProducts(products);

    // Verify that all products were deleted
    expect(prisma.product.deleteMany).toHaveBeenCalledTimes(1);

    // Verify that new products were created
    expect(prisma.product.create).toHaveBeenCalledTimes(products.length);

    // Check that the first product was inserted with correct data
    expect(prisma.product.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        id: 1,
        name: "Test Product",
        productType: "poster",
        primer: "This is a primer",
        description: "This is a description",
        snapshot: "This is a snapshot",
        imageUrl: "https://example.com/image.jpg",
        images: ["https://example.com/image1.jpg"],
        price: 20.0,
        orientation: "portrait",
      }),
    });
  });

  it("should handle errors during transaction", async () => {
    // Mock Prisma to throw an error
    (prisma.product.create as jest.Mock).mockImplementationOnce(() => {
      throw new Error("Prisma create error");
    });

    const products: IProduct[] = [
      {
        id: 1,
        name: "Test Product",
        productType: "poster",
        primer: "This is a primer",
        description: "This is a description",
        snapshot: "This is a snapshot",
        imageUrl: "https://example.com/image.jpg",
        images: ["https://example.com/image1.jpg"],
        price: 20.0,
        orientation: "portrait",
      },
    ];

    await expect(replaceProducts(products)).rejects.toThrow(
      "Prisma create error"
    );

    // Verify that products were deleted
    expect(prisma.product.deleteMany).toHaveBeenCalledTimes(1);
    // Verify that an error was caught and Prisma was disconnected
    expect(prisma.$disconnect).toHaveBeenCalled();
  });
});

describe("isValidProduct", () => {
  it("should return true for a valid product", () => {
    const validProduct: IProduct = {
      id: 1,
      name: "Test Product",
      productType: "poster",
      primer: "This is a primer",
      description: "This is a description",
      snapshot: "This is a snapshot",
      imageUrl: "https://example.com/image.jpg",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 29.99,
      orientation: "portrait",
    };

    expect(isValidProduct(validProduct)).toBe(true);
  });

  it("should return false for an invalid product", () => {
    const invalidProduct = {
      id: "invalid", // id should be a number
      name: "Invalid Product",
      productType: "poster",
      primer: "This is a primer",
      description: "This is a description",
      snapshot: "This is a snapshot",
      imageUrl: "https://example.com/image.jpg",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 29.99,
      orientation: "portrait",
    };

    expect(isValidProduct(invalidProduct)).toBe(false);
  });
});
