import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.RetrospectiveMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    date: z.literal(true).optional(),
    phase: z.literal(true).optional(),
    timerExpiration: z.literal(true).optional(),
    workspaceId: z.literal(true).optional(),
  })
  .strict()

export const RetrospectiveMaxAggregateInputObjectSchema = Schema
