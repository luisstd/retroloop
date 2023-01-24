import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { LinkCountOrderByAggregateInputObjectSchema } from './LinkCountOrderByAggregateInput.schema'
import { LinkMaxOrderByAggregateInputObjectSchema } from './LinkMaxOrderByAggregateInput.schema'
import { LinkMinOrderByAggregateInputObjectSchema } from './LinkMinOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.LinkOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    expiration: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    workspaceId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => LinkCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LinkMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LinkMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const LinkOrderByWithAggregationInputObjectSchema = Schema
