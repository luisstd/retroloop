import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.WorkspaceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export const WorkspaceWhereUniqueInputObjectSchema = Schema
