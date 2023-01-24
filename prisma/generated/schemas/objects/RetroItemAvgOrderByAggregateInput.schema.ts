import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.RetroItemAvgOrderByAggregateInput> = z
  .object({
    votes: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const RetroItemAvgOrderByAggregateInputObjectSchema = Schema
