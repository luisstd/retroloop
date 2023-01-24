import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { ItemCollectionRelationFilterObjectSchema } from './ItemCollectionRelationFilter.schema'
import { ItemCollectionWhereInputObjectSchema } from './ItemCollectionWhereInput.schema'
import { RetrospectiveRelationFilterObjectSchema } from './RetrospectiveRelationFilter.schema'
import { RetrospectiveWhereInputObjectSchema } from './RetrospectiveWhereInput.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const Schema: z.ZodType<Prisma.RetroItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RetroItemWhereInputObjectSchema),
        z.lazy(() => RetroItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RetroItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RetroItemWhereInputObjectSchema),
        z.lazy(() => RetroItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    itemCollection: z
      .union([
        z.lazy(() => ItemCollectionRelationFilterObjectSchema),
        z.lazy(() => ItemCollectionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    retrospective: z
      .union([
        z.lazy(() => RetrospectiveRelationFilterObjectSchema),
        z.lazy(() => RetrospectiveWhereInputObjectSchema),
      ])
      .optional(),
    itemCollectionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    votes: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const RetroItemWhereInputObjectSchema = Schema
