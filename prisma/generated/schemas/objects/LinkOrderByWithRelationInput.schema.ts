import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RetrospectiveOrderByWithRelationInputObjectSchema } from './RetrospectiveOrderByWithRelationInput.schema'
import { WorkspaceOrderByWithRelationInputObjectSchema } from './WorkspaceOrderByWithRelationInput.schema'

const Schema: z.ZodType<Prisma.LinkOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    expiration: z.lazy(() => SortOrderSchema).optional(),
    retro: z.lazy(() => RetrospectiveOrderByWithRelationInputObjectSchema).optional(),
    workspace: z.lazy(() => WorkspaceOrderByWithRelationInputObjectSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    workspaceId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const LinkOrderByWithRelationInputObjectSchema = Schema
