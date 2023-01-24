import { z } from 'zod'

import { AccountCreateManyInputObjectSchema } from './objects/AccountCreateManyInput.schema'

export const AccountCreateManySchema = z.object({
  data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]),
})
