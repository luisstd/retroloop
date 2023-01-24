import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { RetrospectiveRelationFilterObjectSchema } from './RetrospectiveRelationFilter.schema'
import { RetrospectiveWhereInputObjectSchema } from './RetrospectiveWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { WorkspaceRelationFilterObjectSchema } from './WorkspaceRelationFilter.schema'
import { WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const Schema: z.ZodType<Prisma.LinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    expiration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    retro: z
      .union([
        z.lazy(() => RetrospectiveRelationFilterObjectSchema),
        z.lazy(() => RetrospectiveWhereInputObjectSchema),
      ])
      .optional(),
    workspace: z
      .union([
        z.lazy(() => WorkspaceRelationFilterObjectSchema),
        z.lazy(() => WorkspaceWhereInputObjectSchema),
      ])
      .optional(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const LinkWhereInputObjectSchema = Schema
