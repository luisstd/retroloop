import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemUncheckedCreateWithoutAuthorInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    itemCollectionId: z.string().optional().nullable(),
    retrospectiveId: z.string(),
    votes: z.number().optional().nullable(),
  })
  .strict()

export const RetroItemUncheckedCreateWithoutAuthorInputObjectSchema = Schema
