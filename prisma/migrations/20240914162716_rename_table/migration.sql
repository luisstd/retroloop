-- DropForeignKey
ALTER TABLE "RetroItem" DROP CONSTRAINT "RetroItem_retrospectiveId_fkey";

-- DropForeignKey
ALTER TABLE "RetroItem" DROP CONSTRAINT "RetroItem_userId_fkey";

-- AlterTable
ALTER TABLE "RetroItem" RENAME TO "Feedback";
ALTER TABLE "Feedback" RENAME CONSTRAINT "RetroItem_pkey" TO "Feedback_pkey";

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_retrospectiveId_fkey" FOREIGN KEY ("retrospectiveId") REFERENCES "Retrospective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
