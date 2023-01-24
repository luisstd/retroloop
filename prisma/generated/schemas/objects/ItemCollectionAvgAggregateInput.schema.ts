import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ItemCollectionAvgAggregateInputType> = z
  .object({
    votes: z.literal(true).optional(),
  })
  .strict()

export const ItemCollectionAvgAggregateInputObjectSchema = Schema
