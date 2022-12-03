/*
  Warnings:

  - You are about to drop the column `retrospectiveId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_retrospectiveId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "retrospectiveId";

-- CreateTable
CREATE TABLE "_RetrospectiveToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RetrospectiveToUser_AB_unique" ON "_RetrospectiveToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RetrospectiveToUser_B_index" ON "_RetrospectiveToUser"("B");

-- AddForeignKey
ALTER TABLE "_RetrospectiveToUser" ADD CONSTRAINT "_RetrospectiveToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Retrospective"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RetrospectiveToUser" ADD CONSTRAINT "_RetrospectiveToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
