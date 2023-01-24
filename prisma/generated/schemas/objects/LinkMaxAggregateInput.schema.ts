import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.LinkMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    url: z.literal(true).optional(),
    expiration: z.literal(true).optional(),
    retrospectiveId: z.literal(true).optional(),
    workspaceId: z.literal(true).optional(),
  })
  .strict()

export const LinkMaxAggregateInputObjectSchema = Schema
