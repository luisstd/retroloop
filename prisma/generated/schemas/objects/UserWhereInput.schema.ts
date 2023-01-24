import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { InviteListRelationFilterObjectSchema } from './InviteListRelationFilter.schema'
import { RetroItemListRelationFilterObjectSchema } from './RetroItemListRelationFilter.schema'
import { RetrospectiveListRelationFilterObjectSchema } from './RetrospectiveListRelationFilter.schema'
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { WorkspaceListRelationFilterObjectSchema } from './WorkspaceListRelationFilter.schema'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    role: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    retrospectives: z.lazy(() => RetrospectiveListRelationFilterObjectSchema).optional(),
    invite: z.lazy(() => InviteListRelationFilterObjectSchema).optional(),
    retroItem: z.lazy(() => RetroItemListRelationFilterObjectSchema).optional(),
    workspace: z.lazy(() => WorkspaceListRelationFilterObjectSchema).optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
