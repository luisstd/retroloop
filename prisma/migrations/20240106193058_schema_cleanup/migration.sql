/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `Retrospective` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Retrospective" DROP COLUMN "workspaceId",
ALTER COLUMN "timerExpiration" DROP NOT NULL,
ALTER COLUMN "timerExpiration" DROP DEFAULT;
