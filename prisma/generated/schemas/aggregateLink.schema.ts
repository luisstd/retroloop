import { z } from 'zod'

import { LinkCountAggregateInputObjectSchema } from './objects/LinkCountAggregateInput.schema'
import { LinkMaxAggregateInputObjectSchema } from './objects/LinkMaxAggregateInput.schema'
import { LinkMinAggregateInputObjectSchema } from './objects/LinkMinAggregateInput.schema'
import { LinkOrderByWithRelationInputObjectSchema } from './objects/LinkOrderByWithRelationInput.schema'
import { LinkWhereInputObjectSchema } from './objects/LinkWhereInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkAggregateSchema = z.object({
  orderBy: z
    .union([
      LinkOrderByWithRelationInputObjectSchema,
      LinkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LinkWhereInputObjectSchema.optional(),
  cursor: LinkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), LinkCountAggregateInputObjectSchema]).optional(),
  _min: LinkMinAggregateInputObjectSchema.optional(),
  _max: LinkMaxAggregateInputObjectSchema.optional(),
})
