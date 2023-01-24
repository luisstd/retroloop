import { z } from 'zod'

import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema'
import { UserOrderByWithAggregationInputObjectSchema } from './objects/UserOrderByWithAggregationInput.schema'
import { UserScalarWhereWithAggregatesInputObjectSchema } from './objects/UserScalarWhereWithAggregatesInput.schema'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema'

export const UserGroupBySchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserOrderByWithAggregationInputObjectSchema,
      UserOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserScalarFieldEnumSchema),
})
