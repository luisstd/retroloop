import { z } from 'zod'

import { AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema'
import { AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema'
import { AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema'
import { AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountUpsertSchema = z.object({
  where: AccountWhereUniqueInputObjectSchema,
  create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]),
  update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]),
})
