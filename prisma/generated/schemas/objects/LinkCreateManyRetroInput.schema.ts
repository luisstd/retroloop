import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.LinkCreateManyRetroInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    workspaceId: z.string(),
  })
  .strict()

export const LinkCreateManyRetroInputObjectSchema = Schema
