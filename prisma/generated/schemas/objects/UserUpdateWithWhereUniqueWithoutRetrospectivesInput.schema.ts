import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { UserUncheckedUpdateWithoutRetrospectivesInputObjectSchema } from './UserUncheckedUpdateWithoutRetrospectivesInput.schema'
import { UserUpdateWithoutRetrospectivesInputObjectSchema } from './UserUpdateWithoutRetrospectivesInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutRetrospectivesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserUpdateWithoutRetrospectivesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRetrospectivesInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpdateWithWhereUniqueWithoutRetrospectivesInputObjectSchema = Schema
