import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.WorkspaceCreateManyOwnerInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
  })
  .strict()

export const WorkspaceCreateManyOwnerInputObjectSchema = Schema
