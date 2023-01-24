import { z } from 'zod'

import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema'
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'

export const UserUpsertSchema = z.object({
  where: UserWhereUniqueInputObjectSchema,
  create: z.union([UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema]),
  update: z.union([UserUpdateInputObjectSchema, UserUncheckedUpdateInputObjectSchema]),
})
