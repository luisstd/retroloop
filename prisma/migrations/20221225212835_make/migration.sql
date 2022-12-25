-- DropForeignKey
ALTER TABLE "RetroItem" DROP CONSTRAINT "RetroItem_itemCollectionId_fkey";

-- AlterTable
ALTER TABLE "RetroItem" ALTER COLUMN "itemCollectionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "RetroItem" ADD CONSTRAINT "RetroItem_itemCollectionId_fkey" FOREIGN KEY ("itemCollectionId") REFERENCES "ItemCollection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
