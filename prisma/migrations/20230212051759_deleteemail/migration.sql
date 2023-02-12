/*
  Warnings:

  - You are about to drop the column `email` on the `submits` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "submits_email_key";

-- AlterTable
ALTER TABLE "submits" DROP COLUMN "email";
