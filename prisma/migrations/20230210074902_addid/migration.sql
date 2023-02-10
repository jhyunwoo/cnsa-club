/*
  Warnings:

  - A unique constraint covering the columns `[studentId]` on the table `submits` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "submits_studentId_key" ON "submits"("studentId");
