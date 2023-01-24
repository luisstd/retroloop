import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ItemCollectionAvgOrderByAggregateInputObjectSchema } from './ItemCollectionAvgOrderByAggregateInput.schema'
import { ItemCollectionCountOrderByAggregateInputObjectSchema } from './ItemCollectionCountOrderByAggregateInput.schema'
import { ItemCollectionMaxOrderByAggregateInputObjectSchema } from './ItemCollectionMaxOrderByAggregateInput.schema'
import { ItemCollectionMinOrderByAggregateInputObjectSchema } from './ItemCollectionMinOrderByAggregateInput.schema'
import { ItemCollectionSumOrderByAggregateInputObjectSchema } from './ItemCollectionSumOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    votes: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ItemCollectionCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ItemCollectionAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemCollectionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemCollectionMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ItemCollectionSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ItemCollectionOrderByWithAggregationInputObjectSchema = Schema
