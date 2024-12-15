/*
  Warnings:

  - Made the column `expDate` on table `Food` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "expDate" SET NOT NULL;
