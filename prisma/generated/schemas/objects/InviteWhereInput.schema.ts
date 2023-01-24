import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { RetrospectiveRelationFilterObjectSchema } from './RetrospectiveRelationFilter.schema'
import { RetrospectiveWhereInputObjectSchema } from './RetrospectiveWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const Schema: z.ZodType<Prisma.InviteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InviteWhereInputObjectSchema),
        z.lazy(() => InviteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InviteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InviteWhereInputObjectSchema),
        z.lazy(() => InviteWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    retro: z
      .union([
        z.lazy(() => RetrospectiveRelationFilterObjectSchema),
        z.lazy(() => RetrospectiveWhereInputObjectSchema),
      ])
      .optional(),
    invitee: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const InviteWhereInputObjectSchema = Schema
