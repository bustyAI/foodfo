/*
  Warnings:

  - The `category` column on the `Food` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `expDate` column on the `Food` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `price` on table `Food` required. This step will fail if there are existing NULL values in that column.
  - Made the column `total` on table `Pantry` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('vegetables', 'fruits', 'dairy', 'meat', 'seafood', 'grainsAndCereal', 'legumesAnduts', 'snacksAndSweets', 'beverages', 'spicesAndCondiments', 'frozenAndPrepared', 'cannedAndPackaged');

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_pantryId_fkey";

-- DropForeignKey
ALTER TABLE "Pantry" DROP CONSTRAINT "Pantry_userId_fkey";

-- DropIndex
DROP INDEX "Pantry_userId_key";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
DROP COLUMN "category",
ADD COLUMN     "category" "FoodCategory",
DROP COLUMN "expDate",
ADD COLUMN     "expDate" TIMESTAMP(3),
ALTER COLUMN "price" SET NOT NULL;

-- AlterTable
ALTER TABLE "Pantry" ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "total" SET DEFAULT 0.0;

-- AddForeignKey
ALTER TABLE "Pantry" ADD CONSTRAINT "Pantry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_pantryId_fkey" FOREIGN KEY ("pantryId") REFERENCES "Pantry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
