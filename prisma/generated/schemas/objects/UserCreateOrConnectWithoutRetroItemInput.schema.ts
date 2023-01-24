import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutRetroItemInputObjectSchema } from './UserCreateWithoutRetroItemInput.schema'
import { UserUncheckedCreateWithoutRetroItemInputObjectSchema } from './UserUncheckedCreateWithoutRetroItemInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutRetroItemInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRetroItemInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRetroItemInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutRetroItemInputObjectSchema = Schema
