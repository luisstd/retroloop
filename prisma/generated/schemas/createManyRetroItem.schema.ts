import { z } from 'zod'

import { RetroItemCreateManyInputObjectSchema } from './objects/RetroItemCreateManyInput.schema'

export const RetroItemCreateManySchema = z.object({
  data: z.union([
    RetroItemCreateManyInputObjectSchema,
    z.array(RetroItemCreateManyInputObjectSchema),
  ]),
})
