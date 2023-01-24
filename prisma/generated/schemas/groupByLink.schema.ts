import { z } from 'zod'

import { LinkScalarFieldEnumSchema } from './enums/LinkScalarFieldEnum.schema'
import { LinkOrderByWithAggregationInputObjectSchema } from './objects/LinkOrderByWithAggregationInput.schema'
import { LinkScalarWhereWithAggregatesInputObjectSchema } from './objects/LinkScalarWhereWithAggregatesInput.schema'
import { LinkWhereInputObjectSchema } from './objects/LinkWhereInput.schema'

export const LinkGroupBySchema = z.object({
  where: LinkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LinkOrderByWithAggregationInputObjectSchema,
      LinkOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: LinkScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LinkScalarFieldEnumSchema),
})
