import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { VerificationTokenCountOrderByAggregateInputObjectSchema } from './VerificationTokenCountOrderByAggregateInput.schema'
import { VerificationTokenMaxOrderByAggregateInputObjectSchema } from './VerificationTokenMaxOrderByAggregateInput.schema'
import { VerificationTokenMinOrderByAggregateInputObjectSchema } from './VerificationTokenMinOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z
  .object({
    identifier: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VerificationTokenOrderByWithAggregationInputObjectSchema = Schema
