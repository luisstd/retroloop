import { z } from 'zod'

import { SessionCountAggregateInputObjectSchema } from './objects/SessionCountAggregateInput.schema'
import { SessionMaxAggregateInputObjectSchema } from './objects/SessionMaxAggregateInput.schema'
import { SessionMinAggregateInputObjectSchema } from './objects/SessionMinAggregateInput.schema'
import { SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema'
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'

export const SessionAggregateSchema = z.object({
  orderBy: z
    .union([
      SessionOrderByWithRelationInputObjectSchema,
      SessionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SessionWhereInputObjectSchema.optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), SessionCountAggregateInputObjectSchema]).optional(),
  _min: SessionMinAggregateInputObjectSchema.optional(),
  _max: SessionMaxAggregateInputObjectSchema.optional(),
})
