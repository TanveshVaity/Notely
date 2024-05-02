/*
  Warnings:

  - You are about to drop the column `userId` on the `note` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "note" DROP CONSTRAINT "note_userId_fkey";

-- AlterTable
ALTER TABLE "note" DROP COLUMN "userId";
