import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutRetrospectivesInputObjectSchema } from './UserCreateOrConnectWithoutRetrospectivesInput.schema'
import { UserCreateWithoutRetrospectivesInputObjectSchema } from './UserCreateWithoutRetrospectivesInput.schema'
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'
import { UserUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedCreateWithoutRetrospectivesInput.schema'
import { UserUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema } from './UserUpdateManyWithWhereWithoutRetrospectivesInput.schema'
import { UserUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutRetrospectivesInput.schema'
import { UserUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutRetrospectivesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutRetrospectivesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserCreateWithoutRetrospectivesInputObjectSchema).array(),
        z.lazy(() => UserUncheckedCreateWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRetrospectivesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserCreateOrConnectWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserCreateOrConnectWithoutRetrospectivesInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => UserUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema).array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema),
        z.lazy(() => UserUpdateManyWithWhereWithoutRetrospectivesInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const UserUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema = Schema
