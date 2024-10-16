import { PrismaClient } from "@prisma/client";
import IProduct from "@shared/types/ProductInterface"; // Assuming these types are in types.ts
const prisma = new PrismaClient();

// Helper function to validate product structure
const isValidProduct = (product: any): product is IProduct => {
  return (
    typeof product.id === "number" &&
    typeof product.name === "string" &&
    (product.productType === "poster" || product.productType === "tag") &&
    typeof product.primer === "string" &&
    typeof product.description === "string" &&
    typeof product.snapshot === "string" &&
    typeof product.imageUrl === "string" &&
    Array.isArray(product.images) &&
    product.images.every((image: any) => typeof image === "string") &&
    typeof product.price === "number" &&
    (product.orientation === "portrait" || product.orientation === "landscape")
  );
};

const replaceProducts = async (productData: IProduct[]) => {
  try {
    await prisma.$transaction(async (prisma) => {
      // Step 1: Delete all existing products
      await prisma.product.deleteMany({});

      // Step 2: Insert new product data
      for (const product of productData) {
        await prisma.product.create({
          data: {
            id: product.id,
            name: product.name,
            productType: product.productType,
            primer: product.primer,
            description: product.description,
            snapshot: product.snapshot,
            imageUrl: product.imageUrl,
            images: product.images,
            price: product.price,
            orientation: product.orientation,
          },
        });
      }
    });

    console.log("Old products deleted and new products inserted successfully.");
  } catch (error) {
    console.error("Error replacing products:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
export { isValidProduct, replaceProducts };
