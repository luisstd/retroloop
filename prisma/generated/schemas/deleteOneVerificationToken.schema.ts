import { z } from 'zod'

import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'

export const VerificationTokenDeleteOneSchema = z.object({
  where: VerificationTokenWhereUniqueInputObjectSchema,
})
