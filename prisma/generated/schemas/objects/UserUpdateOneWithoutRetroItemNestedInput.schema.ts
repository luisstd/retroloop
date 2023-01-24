import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutRetroItemInputObjectSchema } from './UserCreateOrConnectWithoutRetroItemInput.schema'
import { UserCreateWithoutRetroItemInputObjectSchema } from './UserCreateWithoutRetroItemInput.schema'
import { UserUncheckedCreateWithoutRetroItemInputObjectSchema } from './UserUncheckedCreateWithoutRetroItemInput.schema'
import { UserUncheckedUpdateWithoutRetroItemInputObjectSchema } from './UserUncheckedUpdateWithoutRetroItemInput.schema'
import { UserUpdateWithoutRetroItemInputObjectSchema } from './UserUpdateWithoutRetroItemInput.schema'
import { UserUpsertWithoutRetroItemInputObjectSchema } from './UserUpsertWithoutRetroItemInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutRetroItemNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRetroItemInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRetroItemInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRetroItemInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutRetroItemInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutRetroItemInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRetroItemInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutRetroItemNestedInputObjectSchema = Schema
