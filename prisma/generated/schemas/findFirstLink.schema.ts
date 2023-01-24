import { z } from 'zod'

import { LinkScalarFieldEnumSchema } from './enums/LinkScalarFieldEnum.schema'
import { LinkOrderByWithRelationInputObjectSchema } from './objects/LinkOrderByWithRelationInput.schema'
import { LinkWhereInputObjectSchema } from './objects/LinkWhereInput.schema'
import { LinkWhereUniqueInputObjectSchema } from './objects/LinkWhereUniqueInput.schema'

export const LinkFindFirstSchema = z.object({
  orderBy: z
    .union([
      LinkOrderByWithRelationInputObjectSchema,
      LinkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LinkWhereInputObjectSchema.optional(),
  cursor: LinkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LinkScalarFieldEnumSchema).optional(),
})
