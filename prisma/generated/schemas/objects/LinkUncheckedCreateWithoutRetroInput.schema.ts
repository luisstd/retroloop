import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.LinkUncheckedCreateWithoutRetroInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    workspaceId: z.string(),
  })
  .strict()

export const LinkUncheckedCreateWithoutRetroInputObjectSchema = Schema
