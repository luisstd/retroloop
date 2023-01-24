import { z } from 'zod'

import { RetroItemCreateInputObjectSchema } from './objects/RetroItemCreateInput.schema'
import { RetroItemUncheckedCreateInputObjectSchema } from './objects/RetroItemUncheckedCreateInput.schema'
import { RetroItemUncheckedUpdateInputObjectSchema } from './objects/RetroItemUncheckedUpdateInput.schema'
import { RetroItemUpdateInputObjectSchema } from './objects/RetroItemUpdateInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemUpsertSchema = z.object({
  where: RetroItemWhereUniqueInputObjectSchema,
  create: z.union([RetroItemCreateInputObjectSchema, RetroItemUncheckedCreateInputObjectSchema]),
  update: z.union([RetroItemUpdateInputObjectSchema, RetroItemUncheckedUpdateInputObjectSchema]),
})
