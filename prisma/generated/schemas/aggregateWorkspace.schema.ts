import { z } from 'zod'

import { WorkspaceCountAggregateInputObjectSchema } from './objects/WorkspaceCountAggregateInput.schema'
import { WorkspaceMaxAggregateInputObjectSchema } from './objects/WorkspaceMaxAggregateInput.schema'
import { WorkspaceMinAggregateInputObjectSchema } from './objects/WorkspaceMinAggregateInput.schema'
import { WorkspaceOrderByWithRelationInputObjectSchema } from './objects/WorkspaceOrderByWithRelationInput.schema'
import { WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema'
import { WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema'

export const WorkspaceAggregateSchema = z.object({
  orderBy: z
    .union([
      WorkspaceOrderByWithRelationInputObjectSchema,
      WorkspaceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WorkspaceWhereInputObjectSchema.optional(),
  cursor: WorkspaceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), WorkspaceCountAggregateInputObjectSchema]).optional(),
  _min: WorkspaceMinAggregateInputObjectSchema.optional(),
  _max: WorkspaceMaxAggregateInputObjectSchema.optional(),
})
