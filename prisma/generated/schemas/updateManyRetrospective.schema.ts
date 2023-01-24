import { z } from 'zod'

import { RetrospectiveUpdateManyMutationInputObjectSchema } from './objects/RetrospectiveUpdateManyMutationInput.schema'
import { RetrospectiveWhereInputObjectSchema } from './objects/RetrospectiveWhereInput.schema'

export const RetrospectiveUpdateManySchema = z.object({
  data: RetrospectiveUpdateManyMutationInputObjectSchema,
  where: RetrospectiveWhereInputObjectSchema.optional(),
})
