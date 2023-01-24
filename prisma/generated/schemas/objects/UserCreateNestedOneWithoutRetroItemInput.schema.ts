import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutRetroItemInputObjectSchema } from './UserCreateOrConnectWithoutRetroItemInput.schema'
import { UserCreateWithoutRetroItemInputObjectSchema } from './UserCreateWithoutRetroItemInput.schema'
import { UserUncheckedCreateWithoutRetroItemInputObjectSchema } from './UserUncheckedCreateWithoutRetroItemInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutRetroItemInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRetroItemInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRetroItemInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRetroItemInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutRetroItemInputObjectSchema = Schema
