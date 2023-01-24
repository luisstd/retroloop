import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.SessionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string().optional(),
  })
  .strict()

export const SessionWhereUniqueInputObjectSchema = Schema
