import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    content: z.literal(true).optional(),
    type: z.literal(true).optional(),
    itemCollectionId: z.literal(true).optional(),
    retrospectiveId: z.literal(true).optional(),
    votes: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const RetroItemMaxAggregateInputObjectSchema = Schema
