/*
  Warnings:

  - You are about to drop the column `downvotes` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `upvotes` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "downvotes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "upvotes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "downvotes",
DROP COLUMN "upvotes";
