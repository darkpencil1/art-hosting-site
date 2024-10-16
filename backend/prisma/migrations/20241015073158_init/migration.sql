-- CreateEnum
CREATE TYPE "Orientation" AS ENUM ('PORTRAIT', 'LANDSCAPE');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('poster', 'tag');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productType" "ProductType" NOT NULL,
    "primer" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "snapshot" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "images" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "orientation" "Orientation" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
