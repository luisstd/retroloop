import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RetrospectiveCountOrderByAggregateInputObjectSchema } from './RetrospectiveCountOrderByAggregateInput.schema'
import { RetrospectiveMaxOrderByAggregateInputObjectSchema } from './RetrospectiveMaxOrderByAggregateInput.schema'
import { RetrospectiveMinOrderByAggregateInputObjectSchema } from './RetrospectiveMinOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    phase: z.lazy(() => SortOrderSchema).optional(),
    timerExpiration: z.lazy(() => SortOrderSchema).optional(),
    workspaceId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => RetrospectiveCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RetrospectiveMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RetrospectiveMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const RetrospectiveOrderByWithAggregationInputObjectSchema = Schema
