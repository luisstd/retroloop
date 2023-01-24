import { z } from 'zod'

import { RetrospectiveScalarFieldEnumSchema } from './enums/RetrospectiveScalarFieldEnum.schema'
import { RetrospectiveOrderByWithRelationInputObjectSchema } from './objects/RetrospectiveOrderByWithRelationInput.schema'
import { RetrospectiveWhereInputObjectSchema } from './objects/RetrospectiveWhereInput.schema'
import { RetrospectiveWhereUniqueInputObjectSchema } from './objects/RetrospectiveWhereUniqueInput.schema'

export const RetrospectiveFindFirstSchema = z.object({
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
  distinct: z.array(RetrospectiveScalarFieldEnumSchema).optional(),
})
