-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "refresh_token_expires_in" DROP NOT NULL,
ALTER COLUMN "refresh_token_expires_in" SET DATA TYPE TEXT;
