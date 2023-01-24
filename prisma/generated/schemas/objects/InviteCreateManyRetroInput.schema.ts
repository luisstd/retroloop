import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.InviteCreateManyRetroInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    userId: z.number(),
  })
  .strict()

export const InviteCreateManyRetroInputObjectSchema = Schema
