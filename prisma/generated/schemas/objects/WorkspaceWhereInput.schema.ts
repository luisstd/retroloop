import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { LinkListRelationFilterObjectSchema } from './LinkListRelationFilter.schema'
import { RetrospectiveListRelationFilterObjectSchema } from './RetrospectiveListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkspaceWhereInputObjectSchema),
        z.lazy(() => WorkspaceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkspaceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkspaceWhereInputObjectSchema),
        z.lazy(() => WorkspaceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    owner: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    link: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    retros: z.lazy(() => RetrospectiveListRelationFilterObjectSchema).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const WorkspaceWhereInputObjectSchema = Schema
