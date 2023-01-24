import { z } from 'zod'

import { AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema'
import { AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountUpdateOneSchema = z.object({
  data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]),
  where: AccountWhereUniqueInputObjectSchema,
})
