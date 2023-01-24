import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.RetrospectiveMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    phase: z.lazy(() => SortOrderSchema).optional(),
    timerExpiration: z.lazy(() => SortOrderSchema).optional(),
    workspaceId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const RetrospectiveMaxOrderByAggregateInputObjectSchema = Schema
