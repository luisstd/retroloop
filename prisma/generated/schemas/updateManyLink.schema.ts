import { z } from 'zod'

import { LinkUpdateManyMutationInputObjectSchema } from './objects/LinkUpdateManyMutationInput.schema'
import { LinkWhereInputObjectSchema } from './objects/LinkWhereInput.schema'

export const LinkUpdateManySchema = z.object({
  data: LinkUpdateManyMutationInputObjectSchema,
  where: LinkWhereInputObjectSchema.optional(),
})
