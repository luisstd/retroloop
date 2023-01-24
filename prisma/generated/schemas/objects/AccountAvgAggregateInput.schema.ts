import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AccountAvgAggregateInputType> = z
  .object({
    expires_at: z.literal(true).optional(),
  })
  .strict()

export const AccountAvgAggregateInputObjectSchema = Schema
