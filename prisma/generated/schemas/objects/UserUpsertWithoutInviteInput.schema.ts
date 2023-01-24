import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutInviteInputObjectSchema } from './UserCreateWithoutInviteInput.schema'
import { UserUncheckedCreateWithoutInviteInputObjectSchema } from './UserUncheckedCreateWithoutInviteInput.schema'
import { UserUncheckedUpdateWithoutInviteInputObjectSchema } from './UserUncheckedUpdateWithoutInviteInput.schema'
import { UserUpdateWithoutInviteInputObjectSchema } from './UserUpdateWithoutInviteInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithoutInviteInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutInviteInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutInviteInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutInviteInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutInviteInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutInviteInputObjectSchema = Schema
