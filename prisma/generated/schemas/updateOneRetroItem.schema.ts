import { z } from 'zod'

import { RetroItemUncheckedUpdateInputObjectSchema } from './objects/RetroItemUncheckedUpdateInput.schema'
import { RetroItemUpdateInputObjectSchema } from './objects/RetroItemUpdateInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemUpdateOneSchema = z.object({
  data: z.union([RetroItemUpdateInputObjectSchema, RetroItemUncheckedUpdateInputObjectSchema]),
  where: RetroItemWhereUniqueInputObjectSchema,
})
