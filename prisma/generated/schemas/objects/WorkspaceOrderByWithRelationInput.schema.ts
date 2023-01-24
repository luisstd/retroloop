import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { LinkOrderByRelationAggregateInputObjectSchema } from './LinkOrderByRelationAggregateInput.schema'
import { RetrospectiveOrderByRelationAggregateInputObjectSchema } from './RetrospectiveOrderByRelationAggregateInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    link: z.lazy(() => LinkOrderByRelationAggregateInputObjectSchema).optional(),
    retros: z.lazy(() => RetrospectiveOrderByRelationAggregateInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const WorkspaceOrderByWithRelationInputObjectSchema = Schema
