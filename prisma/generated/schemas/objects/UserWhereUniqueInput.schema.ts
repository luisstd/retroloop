import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
  })
  .strict()

export const UserWhereUniqueInputObjectSchema = Schema
