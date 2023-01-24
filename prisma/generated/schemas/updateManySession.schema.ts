import { z } from 'zod'

import { SessionUpdateManyMutationInputObjectSchema } from './objects/SessionUpdateManyMutationInput.schema'
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'

export const SessionUpdateManySchema = z.object({
  data: SessionUpdateManyMutationInputObjectSchema,
  where: SessionWhereInputObjectSchema.optional(),
})
