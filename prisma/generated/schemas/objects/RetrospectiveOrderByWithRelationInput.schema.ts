import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InviteOrderByRelationAggregateInputObjectSchema } from './InviteOrderByRelationAggregateInput.schema'
import { ItemCollectionOrderByRelationAggregateInputObjectSchema } from './ItemCollectionOrderByRelationAggregateInput.schema'
import { LinkOrderByRelationAggregateInputObjectSchema } from './LinkOrderByRelationAggregateInput.schema'
import { RetroItemOrderByRelationAggregateInputObjectSchema } from './RetroItemOrderByRelationAggregateInput.schema'
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'
import { WorkspaceOrderByWithRelationInputObjectSchema } from './WorkspaceOrderByWithRelationInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    workspace: z.lazy(() => WorkspaceOrderByWithRelationInputObjectSchema).optional(),
    invite: z.lazy(() => InviteOrderByRelationAggregateInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    link: z.lazy(() => LinkOrderByRelationAggregateInputObjectSchema).optional(),
    items: z.lazy(() => RetroItemOrderByRelationAggregateInputObjectSchema).optional(),
    phase: z.lazy(() => SortOrderSchema).optional(),
    participants: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
    timerExpiration: z.lazy(() => SortOrderSchema).optional(),
    workspaceId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const RetrospectiveOrderByWithRelationInputObjectSchema = Schema
