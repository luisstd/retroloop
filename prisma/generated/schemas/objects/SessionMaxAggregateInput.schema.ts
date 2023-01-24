import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.SessionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sessionToken: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    expires: z.literal(true).optional(),
  })
  .strict()

export const SessionMaxAggregateInputObjectSchema = Schema
