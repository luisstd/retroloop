import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutAccountsInputObjectSchema = Schema
