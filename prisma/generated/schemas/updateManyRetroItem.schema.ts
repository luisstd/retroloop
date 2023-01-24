import { z } from 'zod'

import { RetroItemUpdateManyMutationInputObjectSchema } from './objects/RetroItemUpdateManyMutationInput.schema'
import { RetroItemWhereInputObjectSchema } from './objects/RetroItemWhereInput.schema'

export const RetroItemUpdateManySchema = z.object({
  data: RetroItemUpdateManyMutationInputObjectSchema,
  where: RetroItemWhereInputObjectSchema.optional(),
})
