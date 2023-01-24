import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutSessionsInputObjectSchema = Schema
