import { z } from 'zod'

import { RetroItemScalarFieldEnumSchema } from './enums/RetroItemScalarFieldEnum.schema'
import { RetroItemOrderByWithRelationInputObjectSchema } from './objects/RetroItemOrderByWithRelationInput.schema'
import { RetroItemWhereInputObjectSchema } from './objects/RetroItemWhereInput.schema'
import { RetroItemWhereUniqueInputObjectSchema } from './objects/RetroItemWhereUniqueInput.schema'

export const RetroItemFindManySchema = z.object({
  orderBy: z
    .union([
      RetroItemOrderByWithRelationInputObjectSchema,
      RetroItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RetroItemWhereInputObjectSchema.optional(),
  cursor: RetroItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RetroItemScalarFieldEnumSchema).optional(),
})
