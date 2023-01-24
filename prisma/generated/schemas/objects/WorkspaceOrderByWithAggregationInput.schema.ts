import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { WorkspaceCountOrderByAggregateInputObjectSchema } from './WorkspaceCountOrderByAggregateInput.schema'
import { WorkspaceMaxOrderByAggregateInputObjectSchema } from './WorkspaceMaxOrderByAggregateInput.schema'
import { WorkspaceMinOrderByAggregateInputObjectSchema } from './WorkspaceMinOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => WorkspaceCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => WorkspaceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => WorkspaceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const WorkspaceOrderByWithAggregationInputObjectSchema = Schema
