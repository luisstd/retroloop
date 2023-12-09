/*
  Warnings:

  - You are about to drop the `Invite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workspace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemCollectionToRetrospective` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_id_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_retrospectiveId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_retrospectiveId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "RetroItem" DROP CONSTRAINT "RetroItem_itemCollectionId_fkey";

-- DropForeignKey
ALTER TABLE "Retrospective" DROP CONSTRAINT "Retrospective_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ItemCollectionToRetrospective" DROP CONSTRAINT "_ItemCollectionToRetrospective_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemCollectionToRetrospective" DROP CONSTRAINT "_ItemCollectionToRetrospective_B_fkey";

-- DropTable
DROP TABLE "Invite";

-- DropTable
DROP TABLE "ItemCollection";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "Workspace";

-- DropTable
DROP TABLE "_ItemCollectionToRetrospective";
