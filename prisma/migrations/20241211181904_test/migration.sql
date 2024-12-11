-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pantry" (
    "id" SERIAL NOT NULL,
    "title" TEXT,

    CONSTRAINT "Pantry_pkey" PRIMARY KEY ("id")
);
