import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionWhereInputObjectSchema } from './ItemCollectionWhereInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionListRelationFilter> = z
  .object({
    every: z.lazy(() => ItemCollectionWhereInputObjectSchema).optional(),
    some: z.lazy(() => ItemCollectionWhereInputObjectSchema).optional(),
    none: z.lazy(() => ItemCollectionWhereInputObjectSchema).optional(),
  })
  .strict()

export const ItemCollectionListRelationFilterObjectSchema = Schema
