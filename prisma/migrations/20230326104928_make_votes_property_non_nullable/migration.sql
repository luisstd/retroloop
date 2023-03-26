/*
  Warnings:

  - Made the column `votes` on table `RetroItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RetroItem" ALTER COLUMN "votes" SET NOT NULL;
