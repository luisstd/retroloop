-- DropForeignKey
ALTER TABLE "ItemCollection" DROP CONSTRAINT "ItemCollection_retrospectiveId_fkey";

-- CreateTable
CREATE TABLE "_ItemCollectionToRetrospective" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemCollectionToRetrospective_AB_unique" ON "_ItemCollectionToRetrospective"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemCollectionToRetrospective_B_index" ON "_ItemCollectionToRetrospective"("B");

-- AddForeignKey
ALTER TABLE "_ItemCollectionToRetrospective" ADD CONSTRAINT "_ItemCollectionToRetrospective_A_fkey" FOREIGN KEY ("A") REFERENCES "ItemCollection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemCollectionToRetrospective" ADD CONSTRAINT "_ItemCollectionToRetrospective_B_fkey" FOREIGN KEY ("B") REFERENCES "Retrospective"("id") ON DELETE CASCADE ON UPDATE CASCADE;
