import { z } from 'zod'

import { InviteAvgAggregateInputObjectSchema } from './objects/InviteAvgAggregateInput.schema'
import { InviteCountAggregateInputObjectSchema } from './objects/InviteCountAggregateInput.schema'
import { InviteMaxAggregateInputObjectSchema } from './objects/InviteMaxAggregateInput.schema'
import { InviteMinAggregateInputObjectSchema } from './objects/InviteMinAggregateInput.schema'
import { InviteOrderByWithRelationInputObjectSchema } from './objects/InviteOrderByWithRelationInput.schema'
import { InviteSumAggregateInputObjectSchema } from './objects/InviteSumAggregateInput.schema'
import { InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteAggregateSchema = z.object({
  orderBy: z
    .union([
      InviteOrderByWithRelationInputObjectSchema,
      InviteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InviteWhereInputObjectSchema.optional(),
  cursor: InviteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), InviteCountAggregateInputObjectSchema]).optional(),
  _min: InviteMinAggregateInputObjectSchema.optional(),
  _max: InviteMaxAggregateInputObjectSchema.optional(),
  _avg: InviteAvgAggregateInputObjectSchema.optional(),
  _sum: InviteSumAggregateInputObjectSchema.optional(),
})
