-- CreateTable
CREATE TABLE "Government" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" VARCHAR(300) NOT NULL,
    "isExtinct" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Government_pkey" PRIMARY KEY ("id")
);
