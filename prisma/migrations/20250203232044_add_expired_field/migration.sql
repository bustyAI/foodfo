/*
  Warnings:

  - The values [seafood,grainsAndCereal,legumesAnduts,snacksAndSweets,spicesAndCondiments,frozenAndPrepared,cannedAndPackaged] on the enum `FoodCategory` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId]` on the table `Pantry` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FoodCategory_new" AS ENUM ('vegetables', 'fruits', 'dairy', 'meat', 'grains', 'snacks', 'beverages', 'condiments', 'expired');
ALTER TABLE "Food" ALTER COLUMN "category" TYPE "FoodCategory_new" USING ("category"::text::"FoodCategory_new");
ALTER TYPE "FoodCategory" RENAME TO "FoodCategory_old";
ALTER TYPE "FoodCategory_new" RENAME TO "FoodCategory";
DROP TYPE "FoodCategory_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Pantry" DROP CONSTRAINT "Pantry_userId_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "expDate" DROP NOT NULL,
ALTER COLUMN "expDate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Pantry" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT;
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Pantry_userId_key" ON "Pantry"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "Pantry" ADD CONSTRAINT "Pantry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
