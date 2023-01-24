import { z } from 'zod'

import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema'
import { AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema'
import { AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountFindFirstSchema = z.object({
  orderBy: z
    .union([
      AccountOrderByWithRelationInputObjectSchema,
      AccountOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AccountWhereInputObjectSchema.optional(),
  cursor: AccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccountScalarFieldEnumSchema).optional(),
})
