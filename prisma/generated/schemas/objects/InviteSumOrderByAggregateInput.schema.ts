import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.InviteSumOrderByAggregateInput> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const InviteSumOrderByAggregateInputObjectSchema = Schema
