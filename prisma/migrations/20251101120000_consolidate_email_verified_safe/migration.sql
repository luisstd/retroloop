-- Safe migration to consolidate emailVerified columns
-- Preserves all existing data: DateTime → true, NULL → false

-- Step 1: Add temporary Boolean column
ALTER TABLE "User" ADD COLUMN "emailVerified_temp" BOOLEAN NOT NULL DEFAULT false;

-- Step 2: Migrate data from DateTime column to Boolean
-- Any DateTime value (user verified at some point) → true
-- NULL value (user never verified) → false
UPDATE "User" SET "emailVerified_temp" = true WHERE "emailVerified" IS NOT NULL;
-- The false case is already handled by the DEFAULT false

-- Step 3: Drop old emailVerified DateTime column
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- Step 4: Drop emailVerifiedBool column if it exists (idempotent)
ALTER TABLE "User" DROP COLUMN IF EXISTS "emailVerifiedBool";

-- Step 5: Rename temp column to final name
ALTER TABLE "User" RENAME COLUMN "emailVerified_temp" TO "emailVerified";
