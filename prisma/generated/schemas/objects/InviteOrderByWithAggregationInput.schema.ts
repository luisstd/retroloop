import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InviteAvgOrderByAggregateInputObjectSchema } from './InviteAvgOrderByAggregateInput.schema'
import { InviteCountOrderByAggregateInputObjectSchema } from './InviteCountOrderByAggregateInput.schema'
import { InviteMaxOrderByAggregateInputObjectSchema } from './InviteMaxOrderByAggregateInput.schema'
import { InviteMinOrderByAggregateInputObjectSchema } from './InviteMinOrderByAggregateInput.schema'
import { InviteSumOrderByAggregateInputObjectSchema } from './InviteSumOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.InviteOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => InviteCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => InviteAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => InviteMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InviteMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => InviteSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const InviteOrderByWithAggregationInputObjectSchema = Schema
