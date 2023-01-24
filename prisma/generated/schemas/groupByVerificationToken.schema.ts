import { z } from 'zod'

import { VerificationTokenScalarFieldEnumSchema } from './enums/VerificationTokenScalarFieldEnum.schema'
import { VerificationTokenOrderByWithAggregationInputObjectSchema } from './objects/VerificationTokenOrderByWithAggregationInput.schema'
import { VerificationTokenScalarWhereWithAggregatesInputObjectSchema } from './objects/VerificationTokenScalarWhereWithAggregatesInput.schema'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'

export const VerificationTokenGroupBySchema = z.object({
  where: VerificationTokenWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VerificationTokenOrderByWithAggregationInputObjectSchema,
      VerificationTokenOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VerificationTokenScalarFieldEnumSchema),
})
