-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "price" DOUBLE PRECISION,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "expDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pantry" ADD COLUMN     "total" DOUBLE PRECISION;
