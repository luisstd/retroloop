import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateOrConnectWithoutRetrospectivesInputObjectSchema } from './UserCreateOrConnectWithoutRetrospectivesInput.schema'
import { UserCreateWithoutRetrospectivesInputObjectSchema } from './UserCreateWithoutRetrospectivesInput.schema'
import { UserUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedCreateWithoutRetrospectivesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutRetrospectivesInput> = z
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
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const UserCreateNestedManyWithoutRetrospectivesInputObjectSchema = Schema
