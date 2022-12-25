/*
  Warnings:

  - Made the column `itemCollectionId` on table `RetroItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RetroItem" DROP CONSTRAINT "RetroItem_itemCollectionId_fkey";

-- AlterTable
ALTER TABLE "RetroItem" ALTER COLUMN "itemCollectionId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "RetroItem" ADD CONSTRAINT "RetroItem_itemCollectionId_fkey" FOREIGN KEY ("itemCollectionId") REFERENCES "ItemCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
