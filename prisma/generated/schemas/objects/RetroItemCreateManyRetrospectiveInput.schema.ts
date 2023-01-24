import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetroItemCreateManyRetrospectiveInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    content: z.string(),
    type: z.string(),
    itemCollectionId: z.string().optional().nullable(),
    votes: z.number().optional().nullable(),
    userId: z.string().optional().nullable(),
  })
  .strict()

export const RetroItemCreateManyRetrospectiveInputObjectSchema = Schema
