import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemUncheckedCreateWithoutItemCollectionInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    retrospectiveId: z.string(),
    votes: z.number().optional().nullable(),
    userId: z.string().optional().nullable(),
  })
  .strict()

export const RetroItemUncheckedCreateWithoutItemCollectionInputObjectSchema = Schema
