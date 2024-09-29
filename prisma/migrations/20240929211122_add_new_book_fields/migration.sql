/*
  Warnings:

  - Added the required column `hasRepresentation` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tier` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "hasRepresentation" BOOLEAN NOT NULL,
ADD COLUMN     "tier" TEXT NOT NULL;
