import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.VerificationTokenMaxAggregateInputType> = z
  .object({
    identifier: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expires: z.literal(true).optional(),
  })
  .strict()

export const VerificationTokenMaxAggregateInputObjectSchema = Schema
