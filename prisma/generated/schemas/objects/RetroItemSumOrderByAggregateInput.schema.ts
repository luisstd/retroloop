import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.RetroItemSumOrderByAggregateInput> = z
  .object({
    votes: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const RetroItemSumOrderByAggregateInputObjectSchema = Schema
