import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutRetrospectivesInputObjectSchema } from './UserCreateWithoutRetrospectivesInput.schema'
import { UserUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedCreateWithoutRetrospectivesInput.schema'
import { UserUncheckedUpdateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedUpdateWithoutRetrospectivesInput.schema'
import { UserUpdateWithoutRetrospectivesInputObjectSchema } from './UserUpdateWithoutRetrospectivesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserUpdateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRetrospectivesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithWhereUniqueWithoutRetrospectivesInputObjectSchema = Schema
