import { z } from 'zod'

import { VerificationTokenScalarFieldEnumSchema } from './enums/VerificationTokenScalarFieldEnum.schema'
import { VerificationTokenOrderByWithRelationInputObjectSchema } from './objects/VerificationTokenOrderByWithRelationInput.schema'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'
import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'

export const VerificationTokenFindFirstSchema = z.object({
  orderBy: z
    .union([
      VerificationTokenOrderByWithRelationInputObjectSchema,
      VerificationTokenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VerificationTokenWhereInputObjectSchema.optional(),
  cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
})
