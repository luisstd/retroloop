import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema'
import { InviteOrderByRelationAggregateInputObjectSchema } from './InviteOrderByRelationAggregateInput.schema'
import { RetroItemOrderByRelationAggregateInputObjectSchema } from './RetroItemOrderByRelationAggregateInput.schema'
import { RetrospectiveOrderByRelationAggregateInputObjectSchema } from './RetrospectiveOrderByRelationAggregateInput.schema'
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'
import { WorkspaceOrderByRelationAggregateInputObjectSchema } from './WorkspaceOrderByRelationAggregateInput.schema'

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    retrospectives: z.lazy(() => RetrospectiveOrderByRelationAggregateInputObjectSchema).optional(),
    invite: z.lazy(() => InviteOrderByRelationAggregateInputObjectSchema).optional(),
    retroItem: z.lazy(() => RetroItemOrderByRelationAggregateInputObjectSchema).optional(),
    workspace: z.lazy(() => WorkspaceOrderByRelationAggregateInputObjectSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
