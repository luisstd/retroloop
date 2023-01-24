import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    name: z.literal(true).optional(),
    role: z.literal(true).optional(),
    image: z.literal(true).optional(),
  })
  .strict()

export const UserMinAggregateInputObjectSchema = Schema
