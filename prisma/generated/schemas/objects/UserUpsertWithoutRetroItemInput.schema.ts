import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutRetroItemInputObjectSchema } from './UserCreateWithoutRetroItemInput.schema'
import { UserUncheckedCreateWithoutRetroItemInputObjectSchema } from './UserUncheckedCreateWithoutRetroItemInput.schema'
import { UserUncheckedUpdateWithoutRetroItemInputObjectSchema } from './UserUncheckedUpdateWithoutRetroItemInput.schema'
import { UserUpdateWithoutRetroItemInputObjectSchema } from './UserUpdateWithoutRetroItemInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithoutRetroItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRetroItemInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRetroItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRetroItemInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRetroItemInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutRetroItemInputObjectSchema = Schema
