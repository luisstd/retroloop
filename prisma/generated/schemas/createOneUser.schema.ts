import { z } from 'zod'

import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema'

export const UserCreateOneSchema = z.object({
  data: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]),
})
