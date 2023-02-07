/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `submits` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "submits_email_key" ON "submits"("email");
