import { z } from 'zod'

import { UserCountAggregateInputObjectSchema } from './objects/UserCountAggregateInput.schema'
import { UserMaxAggregateInputObjectSchema } from './objects/UserMaxAggregateInput.schema'
import { UserMinAggregateInputObjectSchema } from './objects/UserMinAggregateInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'

export const UserAggregateSchema = z.object({
  orderBy: z
    .union([
      UserOrderByWithRelationInputObjectSchema,
      UserOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserWhereInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), UserCountAggregateInputObjectSchema]).optional(),
  _min: UserMinAggregateInputObjectSchema.optional(),
  _max: UserMaxAggregateInputObjectSchema.optional(),
})
