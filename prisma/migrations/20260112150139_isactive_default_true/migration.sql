/*
  Warnings:

  - You are about to drop the column `isExtinct` on the `Government` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Government" DROP COLUMN "isExtinct",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
