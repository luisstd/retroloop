import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserCreateWithoutRetrospectivesInputObjectSchema } from './UserCreateWithoutRetrospectivesInput.schema'
import { UserUncheckedCreateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedCreateWithoutRetrospectivesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutRetrospectivesInputObjectSchema = Schema
