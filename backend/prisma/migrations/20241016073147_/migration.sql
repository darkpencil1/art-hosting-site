/*
  Warnings:

  - The values [PORTRAIT,LANDSCAPE] on the enum `Orientation` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Orientation_new" AS ENUM ('portrait', 'landscape');
ALTER TABLE "Product" ALTER COLUMN "orientation" TYPE "Orientation_new" USING ("orientation"::text::"Orientation_new");
ALTER TYPE "Orientation" RENAME TO "Orientation_old";
ALTER TYPE "Orientation_new" RENAME TO "Orientation";
DROP TYPE "Orientation_old";
COMMIT;
