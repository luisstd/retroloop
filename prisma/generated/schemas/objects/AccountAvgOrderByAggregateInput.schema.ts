import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z
  .object({
    expires_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AccountAvgOrderByAggregateInputObjectSchema = Schema
