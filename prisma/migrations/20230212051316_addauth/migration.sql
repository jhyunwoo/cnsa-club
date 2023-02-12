/*
  Warnings:

  - You are about to drop the column `name` on the `submits` table. All the data in the column will be lost.
  - Added the required column `club` to the `submits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `submits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "submits" DROP COLUMN "name",
ADD COLUMN     "club" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "submits" ADD CONSTRAINT "submits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
