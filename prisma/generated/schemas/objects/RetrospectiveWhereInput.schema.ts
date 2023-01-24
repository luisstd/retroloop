import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { InviteListRelationFilterObjectSchema } from './InviteListRelationFilter.schema'
import { ItemCollectionListRelationFilterObjectSchema } from './ItemCollectionListRelationFilter.schema'
import { LinkListRelationFilterObjectSchema } from './LinkListRelationFilter.schema'
import { RetroItemListRelationFilterObjectSchema } from './RetroItemListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'
import { WorkspaceRelationFilterObjectSchema } from './WorkspaceRelationFilter.schema'
import { WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RetrospectiveWhereInputObjectSchema),
        z.lazy(() => RetrospectiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RetrospectiveWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RetrospectiveWhereInputObjectSchema),
        z.lazy(() => RetrospectiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    workspace: z
      .union([
        z.lazy(() => WorkspaceRelationFilterObjectSchema),
        z.lazy(() => WorkspaceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    invite: z.lazy(() => InviteListRelationFilterObjectSchema).optional(),
    itemCollections: z.lazy(() => ItemCollectionListRelationFilterObjectSchema).optional(),
    link: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    items: z.lazy(() => RetroItemListRelationFilterObjectSchema).optional(),
    phase: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    participants: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    timerExpiration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    workspaceId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const RetrospectiveWhereInputObjectSchema = Schema
