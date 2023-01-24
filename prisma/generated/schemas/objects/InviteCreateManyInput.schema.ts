import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.InviteCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    userId: z.number(),
    retrospectiveId: z.string(),
  })
  .strict()

export const InviteCreateManyInputObjectSchema = Schema
