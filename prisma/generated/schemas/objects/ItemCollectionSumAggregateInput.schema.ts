import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ItemCollectionSumAggregateInputType> = z
  .object({
    votes: z.literal(true).optional(),
  })
  .strict()

export const ItemCollectionSumAggregateInputObjectSchema = Schema
