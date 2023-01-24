import { z } from 'zod'

import { RetrospectiveScalarFieldEnumSchema } from './enums/RetrospectiveScalarFieldEnum.schema'
import { RetrospectiveOrderByWithAggregationInputObjectSchema } from './objects/RetrospectiveOrderByWithAggregationInput.schema'
import { RetrospectiveScalarWhereWithAggregatesInputObjectSchema } from './objects/RetrospectiveScalarWhereWithAggregatesInput.schema'
import { RetrospectiveWhereInputObjectSchema } from './objects/RetrospectiveWhereInput.schema'

export const RetrospectiveGroupBySchema = z.object({
  where: RetrospectiveWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RetrospectiveOrderByWithAggregationInputObjectSchema,
      RetrospectiveOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RetrospectiveScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RetrospectiveScalarFieldEnumSchema),
})
