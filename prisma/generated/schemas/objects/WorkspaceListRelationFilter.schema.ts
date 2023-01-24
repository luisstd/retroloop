import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceListRelationFilter> = z
  .object({
    every: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
    some: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
    none: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceListRelationFilterObjectSchema = Schema
