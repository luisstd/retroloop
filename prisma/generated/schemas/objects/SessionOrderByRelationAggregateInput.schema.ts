import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

const Schema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const SessionOrderByRelationAggregateInputObjectSchema = Schema
