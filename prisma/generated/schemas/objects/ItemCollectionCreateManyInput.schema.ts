import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ItemCollectionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    votes: z.number().optional().nullable(),
    retrospectiveId: z.string(),
  })
  .strict()

export const ItemCollectionCreateManyInputObjectSchema = Schema
