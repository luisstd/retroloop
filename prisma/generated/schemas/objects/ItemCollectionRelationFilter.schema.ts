import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ItemCollectionWhereInputObjectSchema } from './ItemCollectionWhereInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionRelationFilter> = z
  .object({
    is: z
      .lazy(() => ItemCollectionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ItemCollectionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ItemCollectionRelationFilterObjectSchema = Schema
