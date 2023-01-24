import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.InviteSumAggregateInputType> = z
  .object({
    userId: z.literal(true).optional(),
  })
  .strict()

export const InviteSumAggregateInputObjectSchema = Schema
