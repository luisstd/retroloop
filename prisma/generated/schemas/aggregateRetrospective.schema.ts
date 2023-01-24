import { z } from 'zod'

import { RetrospectiveCountAggregateInputObjectSchema } from './objects/RetrospectiveCountAggregateInput.schema'
import { RetrospectiveMaxAggregateInputObjectSchema } from './objects/RetrospectiveMaxAggregateInput.schema'
import { RetrospectiveMinAggregateInputObjectSchema } from './objects/RetrospectiveMinAggregateInput.schema'
import { RetrospectiveOrderByWithRelationInputObjectSchema } from './objects/RetrospectiveOrderByWithRelationInput.schema'
import { RetrospectiveWhereInputObjectSchema } from './objects/RetrospectiveWhereInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveAggregateSchema = z.object({
  orderBy: z
    .union([
      RetrospectiveOrderByWithRelationInputObjectSchema,
      RetrospectiveOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RetrospectiveWhereInputObjectSchema.optional(),
  cursor: RetrospectiveWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), RetrospectiveCountAggregateInputObjectSchema]).optional(),
  _min: RetrospectiveMinAggregateInputObjectSchema.optional(),
  _max: RetrospectiveMaxAggregateInputObjectSchema.optional(),
})
