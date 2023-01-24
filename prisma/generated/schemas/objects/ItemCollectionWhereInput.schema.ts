import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { RetroItemListRelationFilterObjectSchema } from './RetroItemListRelationFilter.schema'
import { RetrospectiveListRelationFilterObjectSchema } from './RetrospectiveListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

const Schema: z.ZodType<Prisma.ItemCollectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemCollectionWhereInputObjectSchema),
        z.lazy(() => ItemCollectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemCollectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemCollectionWhereInputObjectSchema),
        z.lazy(() => ItemCollectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    votes: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    retrospectives: z.lazy(() => RetrospectiveListRelationFilterObjectSchema).optional(),
    items: z.lazy(() => RetroItemListRelationFilterObjectSchema).optional(),
    retrospectiveId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const ItemCollectionWhereInputObjectSchema = Schema
