/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Government` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Government_slug_key" ON "Government"("slug");
