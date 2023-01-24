import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.ItemCollectionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    votes: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ItemCollectionCountOrderByAggregateInputObjectSchema = Schema
