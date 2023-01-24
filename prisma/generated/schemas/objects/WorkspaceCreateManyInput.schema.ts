import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.WorkspaceCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    userId: z.string(),
  })
  .strict()

export const WorkspaceCreateManyInputObjectSchema = Schema
