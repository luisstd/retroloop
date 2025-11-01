-- Remove fields not used by Better Auth from Account model
-- These fields were used by NextAuth but are not required by Better Auth

ALTER TABLE "Account" DROP COLUMN IF EXISTS "type";
ALTER TABLE "Account" DROP COLUMN IF EXISTS "token_type";
ALTER TABLE "Account" DROP COLUMN IF EXISTS "session_state";
