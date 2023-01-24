import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

const Schema: z.ZodType<Prisma.WorkspaceScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema),
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkspaceScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema),
        z.lazy(() => WorkspaceScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const WorkspaceScalarWhereInputObjectSchema = Schema
