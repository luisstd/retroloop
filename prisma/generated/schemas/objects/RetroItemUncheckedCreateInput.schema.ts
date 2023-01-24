import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    itemCollectionId: z.string().optional().nullable(),
    retrospectiveId: z.string(),
    votes: z.number().optional().nullable(),
    userId: z.string().optional().nullable(),
  })
  .strict()

export const RetroItemUncheckedCreateInputObjectSchema = Schema
