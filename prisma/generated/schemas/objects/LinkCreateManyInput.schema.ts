import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.LinkCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    url: z.string(),
    expiration: z.date(),
    retrospectiveId: z.string(),
    workspaceId: z.string(),
  })
  .strict()

export const LinkCreateManyInputObjectSchema = Schema
