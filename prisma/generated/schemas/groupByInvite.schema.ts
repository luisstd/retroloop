import { z } from 'zod'

import { InviteScalarFieldEnumSchema } from './enums/InviteScalarFieldEnum.schema'
import { InviteOrderByWithAggregationInputObjectSchema } from './objects/InviteOrderByWithAggregationInput.schema'
import { InviteScalarWhereWithAggregatesInputObjectSchema } from './objects/InviteScalarWhereWithAggregatesInput.schema'
import { InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema'

export const InviteGroupBySchema = z.object({
  where: InviteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      InviteOrderByWithAggregationInputObjectSchema,
      InviteOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: InviteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InviteScalarFieldEnumSchema),
})
