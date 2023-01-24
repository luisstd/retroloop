import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ItemCollectionOrderByWithRelationInputObjectSchema } from './ItemCollectionOrderByWithRelationInput.schema'
import { RetrospectiveOrderByWithRelationInputObjectSchema } from './RetrospectiveOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const Schema: z.ZodType<Prisma.RetroItemOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    itemCollection: z.lazy(() => ItemCollectionOrderByWithRelationInputObjectSchema).optional(),
    retrospective: z.lazy(() => RetrospectiveOrderByWithRelationInputObjectSchema).optional(),
    itemCollectionId: z.lazy(() => SortOrderSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
    votes: z.lazy(() => SortOrderSchema).optional(),
    author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const RetroItemOrderByWithRelationInputObjectSchema = Schema
