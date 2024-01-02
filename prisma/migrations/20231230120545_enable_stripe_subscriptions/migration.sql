/*
  Warnings:

  - You are about to drop the column `subscriptionExpires` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionType` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "StripeSubscriptionStatus" AS ENUM ('incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid', 'paused');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "subscriptionExpires",
DROP COLUMN "subscriptionType",
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "stripeSubscriptionId" TEXT,
ADD COLUMN     "stripeSubscriptionStatus" "StripeSubscriptionStatus";

-- CreateTable
CREATE TABLE "StripeEvent" (
    "id" TEXT NOT NULL,
    "api_version" TEXT,
    "data" JSONB NOT NULL,
    "request" JSONB,
    "type" TEXT NOT NULL,
    "object" TEXT NOT NULL,
    "account" TEXT,
    "created" TIMESTAMP(3) NOT NULL,
    "livemode" BOOLEAN NOT NULL,
    "pending_webhooks" INTEGER NOT NULL,

    CONSTRAINT "StripeEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StripeEvent_id_key" ON "StripeEvent"("id");
