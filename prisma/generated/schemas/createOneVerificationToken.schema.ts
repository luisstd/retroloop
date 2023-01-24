import { z } from 'zod'

import { VerificationTokenCreateInputObjectSchema } from './objects/VerificationTokenCreateInput.schema'
import { VerificationTokenUncheckedCreateInputObjectSchema } from './objects/VerificationTokenUncheckedCreateInput.schema'

export const VerificationTokenCreateOneSchema = z.object({
  data: z.union([
    VerificationTokenCreateInputObjectSchema,
    VerificationTokenUncheckedCreateInputObjectSchema,
  ]),
})
