/*
  Delete existing verification tokens before adding new required columns.
*/

-- Delete all existing verification tokens
DELETE FROM "VerificationToken";

-- AlterTable
ALTER TABLE "VerificationToken" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_RetrospectiveToUser" ADD CONSTRAINT "_RetrospectiveToUser_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "public"."_RetrospectiveToUser_AB_unique";
