import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z
  .object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict()

export const VerificationTokenUncheckedCreateInputObjectSchema = Schema
