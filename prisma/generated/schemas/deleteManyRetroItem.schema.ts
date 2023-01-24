import { z } from 'zod'

import { RetroItemWhereInputObjectSchema } from './objects/RetroItemWhereInput.schema'

export const RetroItemDeleteManySchema = z.object({
  where: RetroItemWhereInputObjectSchema.optional(),
})
