import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutAccountsInputObjectSchema = Schema
