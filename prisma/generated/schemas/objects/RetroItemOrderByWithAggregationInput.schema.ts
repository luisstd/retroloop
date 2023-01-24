import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RetroItemAvgOrderByAggregateInputObjectSchema } from './RetroItemAvgOrderByAggregateInput.schema'
import { RetroItemCountOrderByAggregateInputObjectSchema } from './RetroItemCountOrderByAggregateInput.schema'
import { RetroItemMaxOrderByAggregateInputObjectSchema } from './RetroItemMaxOrderByAggregateInput.schema'
import { RetroItemMinOrderByAggregateInputObjectSchema } from './RetroItemMinOrderByAggregateInput.schema'
import { RetroItemSumOrderByAggregateInputObjectSchema } from './RetroItemSumOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.RetroItemOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    itemCollectionId: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    votes: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RetroItemCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => RetroItemAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RetroItemMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RetroItemMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => RetroItemSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const RetroItemOrderByWithAggregationInputObjectSchema = Schema
