import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z
  .object({
    identifier: z.string(),
    token: z.string(),
  })
  .strict()

export const VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema = Schema
