import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemAvgAggregateInputType> = z
  .object({
    votes: z.literal(true).optional(),
  })
  .strict()

export const RetroItemAvgAggregateInputObjectSchema = Schema
