import { z } from 'zod'

import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'

export const UserUpdateOneSchema = z.object({
  data: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]),
  where: UserWhereUniqueInputObjectSchema,
})
