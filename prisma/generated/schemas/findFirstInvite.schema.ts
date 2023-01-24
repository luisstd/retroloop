import { z } from 'zod'

import { InviteScalarFieldEnumSchema } from './enums/InviteScalarFieldEnum.schema'
import { InviteOrderByWithRelationInputObjectSchema } from './objects/InviteOrderByWithRelationInput.schema'
import { InviteWhereInputObjectSchema } from './objects/InviteWhereInput.schema'
import { InviteWhereUniqueInputObjectSchema } from './objects/InviteWhereUniqueInput.schema'

export const InviteFindFirstSchema = z.object({
  orderBy: z
    .union([
      InviteOrderByWithRelationInputObjectSchema,
      InviteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InviteWhereInputObjectSchema.optional(),
  cursor: InviteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InviteScalarFieldEnumSchema).optional(),
})
