-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subscriptionExpires" TIMESTAMP(3),
ADD COLUMN     "subscriptionType" TEXT NOT NULL DEFAULT 'standard';
