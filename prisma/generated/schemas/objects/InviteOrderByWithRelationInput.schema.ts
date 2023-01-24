import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RetrospectiveOrderByWithRelationInputObjectSchema } from './RetrospectiveOrderByWithRelationInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const Schema: z.ZodType<Prisma.InviteOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    retro: z.lazy(() => RetrospectiveOrderByWithRelationInputObjectSchema).optional(),
    invitee: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    retrospectiveId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const InviteOrderByWithRelationInputObjectSchema = Schema
