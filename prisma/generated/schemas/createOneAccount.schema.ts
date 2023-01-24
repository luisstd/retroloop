import { z } from 'zod'

import { AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema'
import { AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema'

export const AccountCreateOneSchema = z.object({
  data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]),
})
