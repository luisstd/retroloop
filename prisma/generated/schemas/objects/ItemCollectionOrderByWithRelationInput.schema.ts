import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RetroItemOrderByRelationAggregateInputObjectSchema } from './RetroItemOrderByRelationAggregateInput.schema'
import { RetrospectiveOrderByRelationAggregateInputObjectSchema } from './RetrospectiveOrderByRelationAggregateInput.schema'

const Schema: z.ZodType<Prisma.ItemCollectionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    votes: z.lazy(() => SortOrderSchema).optional(),
    retrospectives: z.lazy(() => RetrospectiveOrderByRelationAggregateInputObjectSchema).optional(),
    items: z.lazy(() => RetroItemOrderByRelationAggregateInputObjectSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const ItemCollectionOrderByWithRelationInputObjectSchema = Schema
