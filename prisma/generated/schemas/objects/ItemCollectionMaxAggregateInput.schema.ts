import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ItemCollectionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    votes: z.literal(true).optional(),
    retrospectiveId: z.literal(true).optional(),
  })
  .strict()

export const ItemCollectionMaxAggregateInputObjectSchema = Schema
