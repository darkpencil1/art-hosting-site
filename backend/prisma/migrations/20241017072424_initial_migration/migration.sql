-- CreateTable
CREATE TABLE "ProductPageView" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "viewCount" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductPageView_pkey" PRIMARY KEY ("id")
);
