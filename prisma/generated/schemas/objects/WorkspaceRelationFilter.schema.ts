import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceRelationFilter> = z
  .object({
    is: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceRelationFilterObjectSchema = Schema
