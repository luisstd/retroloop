import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.WorkspaceMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const WorkspaceMaxAggregateInputObjectSchema = Schema
