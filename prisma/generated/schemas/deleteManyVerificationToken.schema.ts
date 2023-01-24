import { z } from 'zod'

import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'

export const VerificationTokenDeleteManySchema = z.object({
  where: VerificationTokenWhereInputObjectSchema.optional(),
})
