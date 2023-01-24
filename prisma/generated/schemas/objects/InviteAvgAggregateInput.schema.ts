import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.InviteAvgAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
  })
  .strict()

export const InviteAvgAggregateInputObjectSchema = Schema
