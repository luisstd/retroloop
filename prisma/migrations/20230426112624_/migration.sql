-- AlterTable
ALTER TABLE "RetroItem" ADD COLUMN     "voters" TEXT[] DEFAULT ARRAY[]::TEXT[];
