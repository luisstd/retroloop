import { z } from 'zod'

import { RetroItemCreateInputObjectSchema } from './objects/RetroItemCreateInput.schema'
import { RetroItemUncheckedCreateInputObjectSchema } from './objects/RetroItemUncheckedCreateInput.schema'

export const RetroItemCreateOneSchema = z.object({
  data: z.union([RetroItemCreateInputObjectSchema, RetroItemUncheckedCreateInputObjectSchema]),
})
