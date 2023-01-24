import { z } from 'zod'

import { VerificationTokenUpdateManyMutationInputObjectSchema } from './objects/VerificationTokenUpdateManyMutationInput.schema'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'

export const VerificationTokenUpdateManySchema = z.object({
  data: VerificationTokenUpdateManyMutationInputObjectSchema,
  where: VerificationTokenWhereInputObjectSchema.optional(),
})
