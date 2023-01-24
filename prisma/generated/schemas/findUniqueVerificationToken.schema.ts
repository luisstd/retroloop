import { z } from 'zod'

import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'

export const VerificationTokenFindUniqueSchema = z.object({
  where: VerificationTokenWhereUniqueInputObjectSchema,
})
