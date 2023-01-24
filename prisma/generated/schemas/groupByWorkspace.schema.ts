import { z } from 'zod'

import { WorkspaceScalarFieldEnumSchema } from './enums/WorkspaceScalarFieldEnum.schema'
import { WorkspaceOrderByWithAggregationInputObjectSchema } from './objects/WorkspaceOrderByWithAggregationInput.schema'
import { WorkspaceScalarWhereWithAggregatesInputObjectSchema } from './objects/WorkspaceScalarWhereWithAggregatesInput.schema'
import { WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema'

export const WorkspaceGroupBySchema = z.object({
  where: WorkspaceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WorkspaceOrderByWithAggregationInputObjectSchema,
      WorkspaceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: WorkspaceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(WorkspaceScalarFieldEnumSchema),
})
